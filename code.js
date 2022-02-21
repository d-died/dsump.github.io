
const title = document.querySelector(".title")
const story1 = document.querySelector(".story1")

document.querySelector("#titleNext").addEventListener("click", () => {
    title.classList.add("hide")
    story1.classList.remove("hide")
})

const story2 = document.querySelector(".story2")
document.querySelector("#storyNext").addEventListener("click", () => {
    story1.classList.add("hide")
    story2.classList.remove("hide")
})

const story3 = document.querySelector(".story3")
document.querySelector("#storyNext2").addEventListener("click", () => {
    story2.classList.add("hide")
    story3.classList.remove("hide")
})

class enemyShip  {
    constructor(attack, speed, loot) {
        this.attack = attack
        this.speed = speed
        this.loot = loot
    }
} 

class myShip {
    constructor(attack, speed, loot, health) {
        this.attack = attack
        this.speed = speed
        this.loot = loot
        this.health = health
    }
}

let cletusShip = new myShip(70, 50, 50000, 100)

const story4 = document.querySelector(".story4")
const lookout = document.querySelector("#lookout")
document.querySelector("#storyNext3").addEventListener("click", () => {
    story3.classList.add("hide")
    story4.classList.remove("hide")
})

const story5 = document.querySelector(".story5")
document.querySelector("#storyNext4").addEventListener("click", () => {
    story4.classList.add("hide")
    story5.classList.remove("hide")
})

let myShipStats = document.querySelector(".myShipStats")
let myShipHealth = document.querySelector("#health")
let healthBar = document.querySelector(".healthBar")
let myShipLoot = document.querySelector("#loot")
let story6 = document.querySelector(".story6")

document.querySelector("#storyNext5").addEventListener("click", () => {
    story5.classList.add("hide")
    story6.classList.remove("hide")
    myShipStats.classList.remove("hide")
    myShipLoot.innerHTML = "💰 " + cletusShip.loot
})




let battleChoice = document.querySelector(".battleChoice")
let battleSearch = document.querySelector(".battleSearch")
let attackWin = document.querySelector(".attackWin")
let attackLose = document.querySelector(".attackLose")
let result = document.querySelectorAll(".result")
let gameOver = document.querySelector("#game-over")
let thrived = document.querySelector("#thrived")
let runWin = document.querySelector(".runWin")
let runLose = document.querySelector(".runLose")

if (cletusShip.health >= 0 || cletusShip.loot <= 300000) {
    battle() 
} else { 
    gameOver.classList.remove("hide")
}

function battle() {
    let enemyShip1 = new enemyShip(Math.floor(Math.random() * (95 - 45) + 45), Math.floor(Math.random() * (80 - 20) + 20), Math.floor(Math.random() * (115000 - 30000) + 30000))
    
        document.querySelector("#storyNext6").addEventListener("click", () => {
        story6.classList.add("hide")
        battleChoice.classList.remove("hide")
        if (cletusShip.attack > enemyShip1.attack) {
            lookout.innerHTML = "There we go! Enemy ahead. Well-equipped, looks comparable to our artillery. Could be a fun fight ... or not."
        } else if (cletusShip.attack < enemyShip1.attack) {
            lookout.innerHTML = "Yikes! The ship on the radar looks to be armed to the teeth. It's a risk...could be fun! 😈"
        }
        })

        document.querySelector("#battleBegin").addEventListener("click", () => {
            battleSearch.classList.add("hide")
            battleChoice.classList.remove("hide")
            if (cletusShip.attack > enemyShip1.attack) {
                lookout.innerHTML = "We've got an enemy ahead. Well-equipped, comparable to our artillery. Could be a fun fight ... or not."
            } else if (cletusShip.attack < enemyShip1.attack) {
                lookout.innerHTML = "Yikes! The ship on the radar looks to be armed to the teeth. It'd be a risk! But it could be fun!"
            }
        })

        document.querySelector("#attack").addEventListener("click", () => {
            if (cletusShip.attack >= enemyShip1.attack) {
                let moreLoot = Math.floor(cletusShip.loot += enemyShip1.loot)
                myShipLoot.innerHTML = "💰 " + moreLoot
                battleChoice.classList.add("hide") 
                attackWin.classList.remove("hide")
            } else if (cletusShip.attack < enemyShip1.attack) {
                let lessLoot = Math.floor(cletusShip.loot -= (enemyShip1.loot / 10))
                myShipLoot.innerHTML = "💰 " + lessLoot
                let healthLost = Math.floor(cletusShip.health -= (enemyShip1.attack / 2))
                healthBar.style.width = `${healthLost}%`
                battleChoice.classList.add("hide")
                attackLose.classList.remove("hide")
            }
        })
       
        document.querySelector("#run").addEventListener("click", () => {
            console.log(cletusShip)
            console.log(enemyShip1)
            if (cletusShip.speed >= enemyShip1.speed) {
                battleChoice.classList.add("hide")
                runWin.classList.remove("hide")
            } else if (cletusShip.speed < enemyShip1.speed) {
                let partialLootLoss = Math.floor(cletusShip.loot -= (enemyShip1.loot / 4))
                myShipLoot.innerHTML = "💰 " + partialLootLoss
                let partialHealthLoss = Math.floor(cletusShip.health -= (enemyShip1.attack / 4))
                healthBar.style.width = `${partialHealthLoss}%` 
                battleChoice.classList.add("hide")
                runLose.classList.remove("hide")
            }    
        })
        
        document.getElementById("bigWin").addEventListener("click", () => {
            if (cletusShip.health <= 0) {
                healthBar.style.width = `0%`
                myShipLoot.innerHTML = "💰 floats off into space 🥲"
                attackWin.classList.add("hide")
                gameOver.classList.remove("hide")
            } else if (cletusShip.loot >= 300000) {
                attackWin.classList.add("hide")
                thrived.classList.remove("hide")
            } else {
                attackWin.classList.add("hide")
                battleSearch.classList.remove("hide")
                enemyShip1 = new enemyShip(Math.floor(Math.random() * (95 - 45) + 45), Math.floor(Math.random() * (80 - 20) + 20), Math.floor(Math.random() * (115000 - 30000) + 30000))
                console.log(enemyShip1)
            }
        })

        document.getElementById("bigLose").addEventListener("click", () => {
            if (cletusShip.health <= 0) {
                healthBar.style.width = `0%`
                myShipLoot.innerHTML = "💰 floats off into space 🥲"
                attackLose.classList.add("hide")
                gameOver.classList.remove("hide")
            } else if (cletusShip.loot >= 300000) {
                attackLose.classList.add("hide")
                thrived.classList.remove("hide")
            } else {
                attackLose.classList.add("hide")
                battleSearch.classList.remove("hide")
                enemyShip1 = new enemyShip(Math.floor(Math.random() * (95 - 45) + 45), Math.floor(Math.random() * (80 - 20) + 20), Math.floor(Math.random() * (115000 - 30000) + 30000))
                console.log(enemyShip1)
            }
        })

        document.getElementById("smallWin").addEventListener("click", () => {
            if (cletusShip.health <= 0) {
                healthBar.style.width = `0%`
                myShipLoot.innerHTML = "💰 floats off into space 🥲"
                runWin.classList.add("hide")
                gameOver.classList.remove("hide")
            } else if (cletusShip.loot >= 300000) {
                runWin.classList.add("hide")
                thrived.classList.remove("hide")
            } else {
                runWin.classList.add("hide")
                battleSearch.classList.remove("hide")
                enemyShip1 = new enemyShip(Math.floor(Math.random() * (95 - 45) + 45), Math.floor(Math.random() * (80 - 20) + 20), Math.floor(Math.random() * (115000 - 30000) + 30000))
                console.log(enemyShip1)
            }
        })

        document.getElementById("smallLose").addEventListener("click", () => {
            if (cletusShip.health <= 0) {
                healthBar.style.width = `0%`
                myShipLoot.innerHTML = "💰 floats off into space 🥲"
                runLose.classList.add("hide")
                gameOver.classList.remove("hide")
            } else if (cletusShip.loot >= 300000) {
                runLose.classList.add("hide")
                thrived.classList.remove("hide")
            } else {
                runLose.classList.add("hide")
                battleSearch.classList.remove("hide")
                enemyShip1 = new enemyShip(Math.floor(Math.random() * (95 - 45) + 45), Math.floor(Math.random() * (80 - 20) + 20), Math.floor(Math.random() * (115000 - 30000) + 30000))
                console.log(enemyShip1)
            }
        })
}

        document.querySelector("#start-over").addEventListener("click", () => {
            // myShipLoot.classList.add("hide")
            healthBar.style.width = `100%`
            cletusShip = new myShip(70, 50, 50000, 100)
            myShipStats.classList.add("hide")
            gameOver.classList.add("hide")
            title.classList.remove("hide")
        })

        document.querySelector("#once-more").addEventListener("click", () => {
            // myShipLoot.classList.add("hide")
            // myShipHealth.classList.add("hide")
            healthBar.style.width = `100%`
            cletusShip = new myShip(70, 50, 50000, 100)
            myShipStats.classList.add("hide")
            thrived.classList.add("hide")
            title.classList.remove("hide")
        })


























