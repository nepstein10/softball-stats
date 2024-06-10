export const Player = {
	id: number,
	firstName: string,
	lastName: string,
	uniformNumber: number,
	nicknames: string[],
	notes: string
}

export const Game = {
	id: number,
	date: number,
	opponent: string,
	home: boolean,
	homeScore: number,
	visitorScore: number,
	innings: number,
	notes: string
}

export const Season = {
	id: number,
	year: number,
	session: string,
	games: number[],	// The ids of the games, in chronological order
	notes: string
}

export const StatCategories = {
	ab: number,
	h: number,
	2b: number,
	3b: number,
	hr: number,
	r: number,
	rbi: number,
	sac: number,
	k: number,
	bb: number
}

export const StatsSingleGamePlayer = {
	playerId: number,
	gameId: number,
	stats: StatCategories
}

export const StatsSingleSeasonPlayer = {
	playerId: number,
	seasonId: number,
	stats: StatCategories
}

export const StatsSingleGameTeam = {
	gameId: number,
	stats: StatCategories
}

export const StatsSingleSeasonTeam = {
	seasonId: number,
	stats: StatCategories
}