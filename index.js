const bloods = prompt('what was your blood pressure when you last checked? (sistonic & diastonic)')

if (bloods < 120) {
    console.log('your blood pressure is normal')
}
else if (bloods >= 120 && bloods < 129) {
    console.log('Your blood pressure is up and almost close to hypertension!')
}
else if (bloods > 130) {
    console.log('you have hypertension :(')
}