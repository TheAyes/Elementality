import type { Player } from "./player.ts";

export interface ISpell {
	id: string;
	name: string;
	description?: string;
	icon?: string;
	cost: number;
	damage?: number;
	onDraw?: () => void;
	onPlay: (toTarget: Player) => void;
	onCombine?: (combineWith: Spell) => void;
}

export class Spell implements ISpell {
	public readonly id: ISpell["id"];
	public readonly name: ISpell["name"];
	public readonly description: ISpell["description"];
	public readonly icon: ISpell["icon"];

	public readonly cost: ISpell["cost"];
	public readonly damage: ISpell["damage"];

	constructor(newSpell: Partial<Spell> = {}) {
		this.id = newSpell.id ?? "spell";
		this.name = newSpell.name ?? "Spell";
		this.description = newSpell.description ?? "This is a spell!";
		this.cost = newSpell.cost ?? 1;
		this.damage = newSpell.damage ?? 0;
	}

	onPlay: ISpell["onPlay"] = (toTarget) => {
		toTarget.applyDamage(this.damage);
	};
}

export const buildSpellList = async () => {
	//const result = await fs.readdir(spellDir);

	console.log("");
};
