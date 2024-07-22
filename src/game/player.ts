import type { ISpell, Spell } from "./spell.ts";

export class Player {
	public readonly name: string = "player";
	public mana: number = 10;
	public spells: Spell[] = [];

	private _health: number = 100;

	get health() {
		return this._health;
	}

	set health(newHealth: typeof this._health) {
		this._health = newHealth;
	}

	public applyDamage = (damage: ISpell["damage"]) => {
		this.health -= damage ?? 0;
	};
}

export class NPC extends Player {}
