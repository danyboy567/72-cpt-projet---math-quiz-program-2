function ConvertToAnswerr (numm1: number, numm2: number) {
    if (_symbol == "+") {
        Answers.push(numm1 + numm2)
    } else if (_symbol == "-") {
        Answers.push(numm1 - numm2)
    } else if (_symbol == "*") {
        Answers.push(numm1 * numm2)
    } else if (_symbol == "/") {
        Answers.push(numm1 / numm2)
    }
}
function CheckAnswer () {
    if (inputAnswer == Answers[index2]) {
        mySprite3.sayText("Correct!", 1000, false)
        pause(500)
    } else {
        mySprite3.sayText("Wrong!", 1000, false)
        info.changeScoreBy(-1)
        pause(500)
    }
}
function GradeQuiz () {
    game.splash("You scored ", "" + info.score() + "/5" + "(" + info.score() / 5 * 100 + "%)")
}
function askQuestions () {
    index2 = 0
    for (let index = 0; index < newQuestions.length; index++) {
        mySprite.sayText("question " + (index2 + 1) + ": " + newQuestions[index2])
        mySprite2.sayText("Click A to submit answer")
        pauseUntil(() => controller.A.isPressed())
        inputAnswer = game.askForNumber("")
        pause(200)
        CheckAnswer()
        pause(200)
        index2 += 1
    }
    GradeQuiz()
}
let index2 = 0
let inputAnswer = 0
let newQuestions: string[] = []
let num2 = 0
let num1 = 0
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let Answers: number[] = []
let _symbol = ""
info.setScore(5)
scene.setBackgroundColor(5)
_symbol = ""
let questions: number[] = []
Answers = []
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f 3 3 5 3 3 5 3 d f f . . 
    . . . f d f 3 5 5 3 f f d f . . 
    . . . f d f 3 3 3 3 3 f f . . . 
    . . . f f 3 5 3 3 5 3 3 f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . . . . . . f f . . . . . 
    `, SpriteKind.Player)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
mySprite.setPosition(79, 51)
mySprite2.setPosition(116, 92)
mySprite3.setPosition(34, 89)
for (let index = 0; index <= 4; index++) {
    num1 = randint(0, 10)
    num2 = randint(0, 10)
    if (Math.percentChance(25)) {
        _symbol = "+"
    } else if (Math.percentChance(25)) {
        _symbol = "*"
    } else if (Math.percentChance(25)) {
        _symbol = "-"
    } else {
        _symbol = "/"
        if (num1 < num2) {
            while (num1 < num2) {
                num1 = randint(0, 10)
                num2 = randint(0, 10)
            }
        }
    }
    newQuestions[index] = "" + num1 + _symbol + num2
    ConvertToAnswerr(num1, num2)
}
askQuestions()
