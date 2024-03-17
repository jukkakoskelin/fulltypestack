interface ExerciseResults {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
    };

export const calculateExercises = (dailyHours: Array<number>, target: number): ExerciseResults => {    
    const periodLength = dailyHours.length;    
    const trainingDays = dailyHours.filter(h => h > 0).length;    
    const average = dailyHours.reduce((a, b) => a + b, 0) / periodLength;
    const success = average >= target;
    const rating = success ? 3 : average >= target - 1 ? 2 : 1;
    const ratingDescription = rating === 3 ? 'a good week!' : rating === 2 ? 'not too bad but could be better' : 'lazy week!';
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
}

//console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 1.5));
//console.log(calculateExercises([Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4]), Number(process.argv[5]), Number(process.argv[6]), Number(process.argv[7]), Number(process.argv[8])], Number(process.argv[9])))
if (process.argv.length < 3) {
    throw new Error('At least one argument is required');
}

const args = process.argv.slice(2).map(arg => {
    const number = Number(arg);
    if (isNaN(number)) {
        throw new Error(`Invalid argument: ${arg}`);
    }
    return number;
});

const target = args.pop();

if (isNaN(target)) {
    throw new Error('Invalid target');
}

console.log(calculateExercises(args, target));