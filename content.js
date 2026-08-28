export const data = {
	"Info":{
		"Content":`
Makeshift wiki for all my characters.

All characters are open source.
		`,
	},
	"Disgrace":{
		"Content":``,
		"CharacterInfo":{
			"Name": "Disgrace",
			"Description": "Character based on nothing, a random moveset i made with some jujutsu shenanigans involved.",
			"Image": "./contents/disgrace.png",
			"NameColors":{
				"Color": "#600000",
				"ShadowColor": "#400000",
			},
			"CCTag":"DisgraceCode",
		},
		"Skillset":{
			0: {
				"Name": "Restless",
				"Description": "The gap between the second and third M1 is shorter, making the user's M1 string faster, at the cost of less damage (3+3+3+4).",
				"Data":{
					"Damage": "3+3+3+4",
					"Effect": "Faster M1 string, reduces damage",
				},
				"Properties":{
					"Blockability": "Semi-Blockable",
					"Interruptability": "Interruptable",
					"Target": "Semi Bypasses Ragdoll",
				},
				"Tag":{
					"Color": "purple",
					"Text": "Passive",
				},
				"NameColors":{
					"Color": "#600000",
					"ShadowColor": "#400000",
				}
			},
			1: {
				"Name": "Upperhand",
				"Description": "The user switches into a heavier attacking mode, which affects his M1's and some of his moves. While on this heavy mode, their fists becomes covered in hardened flesh. It also shortens their M1 string to two M1's with noticeably slower attack speeds. The first heavy M1 can partly bypass block but if blocked, it won't stun. The final heavy M1 fully block breaks and it deals extra damage if the target was blocking as well as playing a short animation for both parties. The final heavy M1 also bypasses ragdoll but will grant extra evasive to the target if hit during ragdoll.",
				"Data":{
					"Damage": "5+5 (+5 if target was blocking)",
					"Cooldown": "0.2s",
				},
				"Properties":{
					"Blockability": "Semi-Blockable",
					"Interruptability": "Interruptable",
					"Target": "Semi Bypasses Ragdoll",
				},
				"Tag":{
					"Color": "orange",
					"Text": "Special",
				},
				"NameColors":{
					"Color": "#600000",
					"ShadowColor": "#400000",
				}
			},
			2: {
				"Name": "Ground Breaker",
				"Description": "The user throws their hands forwards, which a spike will then rush out of the ground to pierce their opponent. Sending the people hit flying forward. There is a small space in front of the user which remains as a blind spot for the hitbox.",
				"Data":{
					"Damage": "8",
					"Cooldown": "16s",
				},
				"Properties":{
					"Blockability": "Blockable",
					"Interruptability": "Interruptable",
					"Target": "Bypasses Ragdoll",
				},
				"Tag":{
					"Color": "red",
					"Text": "Skill I",
				},
				"NameColors":{
					"Color": "#900000",
					"ShadowColor": "#400000",
				}
			},
			3: {
				"Name": "Black Flash",
				"Description": "If the move is used twice while the user's hands are fully wound back, they will throw their hands forwards with cursed energy. If hit, they will unleash a Black Flash that blasts the opponent away. If this variant hits, it sets the move on a longer cooldown.",
				"Data":{
					"Damage": "16",
					"Cooldown": "18s (16s if missed)",
				},
				"Properties":{
					"Blockability": "Unblockable",
					"Interruptability": "Interruptable",
					"Target": "Bypasses Ragdoll",
				},
				"Tag":{
					"Color": "red",
					"Text": "Variant",
				},
				"NameColors":{
					"Color": "#000000",
					"ShadowColor": "#ff0000",
				}
			},
			4: {
				"Name": "Whiplash",
				"Description": "The user will throw their hands forwards, and extend a set of tendrils which will attempt to snatch the enemy. If hit, it pulls the target towards them. If the move lands, it extends their M1 combo reset time.",
				"Data":{
					"Damage": "3",
					"Cooldown": "16s",
				},
				"Properties":{
					"Blockability": "Blockable",
					"Interruptability": "Interruptable",
					"Target": "Cannot Bypass Ragdoll",
				},
				"Tag":{
					"Color": "red",
					"Text": "Skill II",
				},
				"NameColors":{
					"Color": "#900000",
					"ShadowColor": "#400000",
				}
			},
		},
	},
	"Prime Judge":{
		"Content":``,
		"CharacterInfo":{
			"Name": "Prime Judge",
			"Description": "A character based on Minos Prime from ULTRAKILL.",
			"Image": "./contents/prime_judge.png",
			"NameColors":{
				"Color": "#c1ffff",
				"ShadowColor": "#fff",
			},
			"CCTag":"PrimeJudgeCode",
		},
		"Skillset":{
		}
	}
};

export const hData = {
	"CCTags":{
"DisgraceCode": window.DisgraceCode,
"PrimeJudgeCode": window.PrimeJudgeCode,
	},
}