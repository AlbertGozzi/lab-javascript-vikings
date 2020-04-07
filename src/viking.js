// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        let returnStr = this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
        return returnStr;
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        let returnStr = this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
        return returnStr;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }    

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }    

    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];

        if (randomSaxon.health <= randomViking.strength) { this.saxonArmy.splice(randomSaxonIndex) };

        return randomSaxon.receiveDamage(randomViking.strength);
    }

    saxonAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];

        if (randomViking.health <= randomSaxon.strength) { this.vikingArmy.splice(randomVikingIndex) };

        return randomViking.receiveDamage(randomSaxon.strength);
    }

    showStatus() {
        if (this.saxonArmy.length === 0) { return "Vikings have won the war of the century!" };
        if (this.vikingArmy.length === 0) { return "Saxons have fought for their lives and survived another day..." };
        return "Vikings and Saxons are still in the thick of battle.";
    }

}
