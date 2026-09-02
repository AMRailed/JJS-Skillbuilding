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
			"FlavorText": "im kinda a disgrace😔",
			"Image": "./contents/disgrace.png",
			"NameColors":{
				"Color": "#600000",
				"ShadowColor": "#400000",
			},
			"CCTag":"DisgraceCode",
		},
		"Skillset":{
			"Base": {
				0: {
					0: {
						"Name": "Restless",
						"Description": "The gap between the second and third M1 is shorter, making the user's M1 string faster, at the cost of less damage (3+3+3+4).",
						"FlavorText": "never at rest",
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
				},
				1: {
					0: {
						"Name": "Upperhand",
						"Description": "The user switches into a heavier attacking mode, which affects his M1's and some of his moves. While on this heavy mode, their fists becomes covered in hardened flesh. It also shortens their M1 string to two M1's with noticeably slower attack speeds. The first heavy M1 can partly bypass block but if blocked, it won't stun. The final heavy M1 fully block breaks and it deals extra damage if the target was blocking as well as playing a short animation for both parties. The final heavy M1 also bypasses ragdoll but will grant extra evasive to the target if hit during ragdoll.",
						"FlavorText": "feel the weight of my fists",
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
				},
				2: {
					0: {
						"Name": "Ground Breaker",
						"Description": "The user throws their hands forwards, which a spike will then rush out of the ground to pierce their opponent. Sending the people hit flying forward. There is a small space in front of the user which remains as a blind spot for the hitbox.",
						"FlavorText": "where'd the ground go?",
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
					1: {
						"Name": "Black Flash",
						"Description": "If the move is used twice while the user's hands are fully wound back, they will throw their hands forwards with cursed energy. If hit, they will unleash a Black Flash that blasts the opponent away. If this variant hits, it sets the move on a longer cooldown.",
						"FlavorText": "one million black flashes",
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
				},
				3: {
					0: {
						"Name": "Whiplash",
						"Description": "The user will throw their hands forwards, and extend a set of tendrils which will attempt to snatch the enemy. If hit, it pulls the target towards them. If the move lands, it extends their M1 combo reset time.",
						"FlavorText": "come here, i want to talk",
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
					1: {
						"Name": "Propel",
						"Description": "The user will throw themselves forward and ram their fists into their enemies. The target will then move alongside the user. Using the move will always extend their M1 combo reset time.",
						"FlavorText": "how about i come to you instead",
						"Data":{
							"Damage": "6",
							"Cooldown": "16s",
						},
						"Properties":{
							"Blockability": "Blockable",
							"Interruptability": "Interruptable",
							"Target": "Bypasses Ragdoll",
						},
						"Tag":{
							"Color": "red",
							"Text": "Heavy Variant",
						},
						"NameColors":{
							"Color": "#900000",
							"ShadowColor": "#400000",
						}
					},
					2: {
						"Name": "Whiplash",
						"Description": "The user can use the Whiplash move immediately after the first skill (Ground Breaker). The move will execute faster and can bypass ragdoll. The move will always set the user's M1 chain to their second M1. This variant is unavailable during Heavy mode.",
						"FlavorText": "that was quick",
						"Data":{
							"Damage": "3",
							"Cooldown": "16s",
						},
						"Properties":{
							"Blockability": "Blockable",
							"Interruptability": "Interruptable",
							"Target": "Bypasses Ragdoll",
						},
						"Tag":{
							"Color": "red",
							"Text": "Variant",
						},
						"NameColors":{
							"Color": "#ff4040",
							"ShadowColor": "#9a2d2d",
						}
					},
				},
				4: {
					0: {
						"Name": "Spiteful Blow",
						"Description": "The user launches their arm forwards and attempts to stab their enemy. If hit, it will inflict two stacks of bleed. The stun will be over when the animation for the stab is over, making it a false combo extender.",
						"FlavorText": "im so spiteful right now",
						"Data":{
							"Damage": "9",
							"Cooldown": "16s",
						},
						"Properties":{
							"Blockability": "Blockable",
							"Interruptability": "Interruptable",
							"Target": "Cannot Bypass Ragdoll",
						},
						"Tag":{
							"Color": "red",
							"Text": "Skill III",
						},
						"NameColors":{
							"Color": "#ff0000",
							"ShadowColor": "#ff0000",
						}
					},
					1: {
						"Name": "Spiteful Blow",
						"Description": "If the target hit has at least two stacks of bleed. They will get sent further away with a longer stun time, making it a true combo extender.",
						"FlavorText": "you shouldve bled more",
						"Data":{
							"Damage": "9+4",
							"Cooldown": "16s",
						},
						"Properties":{
							"Blockability": "Blockable",
							"Interruptability": "Interruptable",
							"Target": "Cannot Bypass Ragdoll",
						},
						"Tag":{
							"Color": "red",
							"Text": "Variant",
						},
						"NameColors":{
							"Color": "#3e0b0b",
							"ShadowColor": "#ff0000",
						}
					},
					2: {
						"Name": "Spiteful Blow",
						"Description": "The user shoots forward and backhands the opponent. If hit, the target will get sent away with ragdoll. If the user was walking backwards, they will go in the opposite direction instead.",
						"FlavorText": "meanest backhand in the whole world",
						"Data":{
							"Damage": "10",
							"Cooldown": "16s",
						},
						"Properties":{
							"Blockability": "Blockable",
							"Interruptability": "Interruptable",
							"Target": "Bypasses Ragdoll",
						},
						"Tag":{
							"Color": "red",
							"Text": "Heavy Variant",
						},
						"NameColors":{
							"Color": "#ff0000",
							"ShadowColor": "#ff0000",
						}
					},
					3: {
						"Name": "Spiteful Blow",
						"Description": "If the special is used during the first 0.2 seconds of execution, it will cancel the move, but will still keep the user's momentum.",
						"FlavorText": "i meant to do that",
						"Data":{
							"Cooldown": "0s (2s for special)",
						},
						"Properties":{
						},
						"Tag":{
							"Color": "gray",
							"Text": "Feint",
						},
						"NameColors":{
							"Color": "#7b7b7b",
							"ShadowColor": "#343434",
						}
					},
				},
				5: {
					0: {
						"Name": "Hasty Arrival",
						"Description": "The user charges up their cursed energy and launches themselves forward. When the launch is initiated, they will send anyone near them forwards and ragdoll them for a short period. They can control the direction mid-launch. They get I-frames during the last moments of their launch. After a short period of time, they will crush the ground. Sending anyone near flying upwards as well as themselves. The hit also ragdolls said targets.",
						"FlavorText": "the rush of the moment",
						"Data":{
							"Damage": "8 (+2)",
							"Cooldown": "14s",
						},
						"Properties":{
							"Blockability": "Blockable",
							"Interruptability": "Partly Interruptable",
							"Target": "Bypasses Ragdoll",
						},
						"Tag":{
							"Color": "red",
							"Text": "Skill IV",
						},
						"NameColors":{
							"Color": "#660000",
							"ShadowColor": "#1e0000",
						}
					},
					1: {
						"Name": "Hasty Arrival",
						"Description": "Similar to the un-held variant, except this one does more damage, is unblockable, has more I-frames, affects a bigger radius, and sends them flying up higher.",
						"FlavorText": "im holding the button",
						"Data":{
							"Damage": "13 (+2)",
							"Cooldown": "14s",
						},
						"Properties":{
							"Blockability": "Unblockable",
							"Interruptability": "Interruptable",
							"Target": "Bypasses Ragdoll",
						},
						"Tag":{
							"Color": "red",
							"Text": "Hold Variant",
						},
						"NameColors":{
							"Color": "#660000",
							"ShadowColor": "#1e0000",
						}
					},
					2: {
						"Name": "Hasty Arrival",
						"Description": "If the user is hit within the first 0.3 seconds of the move's execution, it will skip to a variant of the move which will continue flying until the target is hit or until a second has passed, leaving afterimages as they travel. Otherwise, it acts similarly to the un-held variant with a slightly bigger hitbox. If the user has shift-lock during the flying sequence, they are able to fully control the movement. The countered target will not be stunned, however they will be unable to block, M1, sprint, jump, nor dash.",
						"FlavorText": "haha you got tricked",
						"Data":{
							"Damage": "9",
							"Cooldown": "14s",
							"Self Heal": "3",
						},
						"Properties":{
							"Blockability": "Unblockable",
							"Interruptability": "Uninterruptable",
							"Target": "Bypasses Ragdoll",
						},
						"Tag":{
							"Color": "red",
							"Text": "Counter",
						},
						"NameColors":{
							"Color": "#ff9b3d",
							"ShadowColor": "#470000",
						}
					},
					3: {
						"Name": "Hasty Kickdown",
						"Description": "The user flies upwards by a small amount before shooting themselves downwards. Once they hit the ground, they will slam their legs on the ground. If hit, they themselves will also fly upwards. The enemies hit will get ragdolled and fly up with them too. If missed, it has an easily punishable endlag. If hit, unless the jump key is held, it will always force a downslam on the next 1.4 seconds.",
						"FlavorText": "we are descending",
						"Data":{
							"Damage": "9",
							"Cooldown": "14s",
						},
						"Properties":{
							"Blockability": "Blockable",
							"Interruptability": "Interruptable",
							"Target": "Bypasses Ragdoll",
						},
						"Tag":{
							"Color": "red",
							"Text": "Air Variant",
						},
						"NameColors":{
							"Color": "#660000",
							"ShadowColor": "#1e0000",
						}
					},
				},
			},
			"Awakening": {
				0: {
					0: {
						"Name": "Death Disease",
						"Description": "The user slams their fists into the ground and releases a giant cloud of red smoke. Which deals constant tick damage every .1 second, the tick damage does not stun. The user will then finish their transformation with a powerful bang that blasts everyone away, dealing major damage.",
						"FlavorText": "this is what lung cancer is like",
						"Data":{
							"Damage": "(2 * 9 ticks) + 17 (for bang)",
							"Duration": "60s",
						},
						"Properties":{
							"Blockability": "Semi-Blockable",
							"Interruptability": "Uninterruptable",
							"Target": "Bypasseses Ragdoll",
						},
						"Tag":{
							"Color": "navy",
							"Text": "Awakening",
						},
						"NameColors":{
							"Color": "#000000",
							"ShadowColor": "#400000",
						},
					},
					1: {
						"Name": "Rancid Mist",
						"Description": "The user will be constantly covered in a cloud of dark red mist for as long as the awakening lasts.",
						"FlavorText": "you like my stink?",
						"Data":{
							"Effect": "Gives the user a constant red smoke.",
						},
						"Tag":{
							"Color": "darkviolet",
							"Text": "Cosmetic",
						},
						"NameColors":{
							"Color": "#7c0000",
							"ShadowColor": "#400000",
						},
					},
				},
				1: {
					0: {
						"Name": "Rapid Closure",
						"Description": "The user prepares a sprint, during the windup they are vulnerable to all attacks. However, once the run down has begun they are completely immune. Upon contact with an enemy, they will grab them before shooting clouds of red smoke into their body that drains their evasive. Before blasting them away. The move has very little endlag.",
						"FlavorText": "here i come!!!",
						"Data":{
							"Damage": "16 + (4*4) + 19 | (Total of 51)",
							"Cooldown": "18s",
						},
						"Properties":{
							"Blockability": "Unblockable",
							"Interruptability": "Partly Interruptible",
							"Target": "Bypasses Ragdoll",
							"Ragdoll": "True Ragdoll",
						},
						"Tag":{
							"Color": "darkred",
							"Text": "Awk. Skill I",
						},
						"NameColors":{
							"Color": "#7c0000",
							"ShadowColor": "#400000",
						},
					},
					1: {
						"Name": "Continous Black Flash",
						"Description": "Using the move again when it flashes red will allow them to run earlier at faster speeds, while leaving black afterimages. When hit, the user will unleash a powerful black flash that sends the enemy flying away with a relatively short ragdoll time. The move will be set on a shorter cooldown if hit.",
						"FlavorText": "this is getting repetitive",
						"Data":{
							"Damage": "26",
							"Cooldown": "2.5s (18s if missed)",
						},
						"Properties":{
							"Blockability": "Unblockable",
							"Interruptability": "Partly Interruptible",
							"Target": "Bypasses Ragdoll",
						},
						"Tag":{
							"Color": "red",
							"Text": "Variant",
						},
						"NameColors":{
							"Color": "#000000",
							"ShadowColor": "#ff0000",
						},
					},
				},
				2: {
					0: {
						"Name": "Gluttonous Raid",
						"Description": "The user flies forwards while a cloud of red smoke follows them. The user has full control over the flight, and can move up and down. Anyone hit will be sent forward with short stun, the user can hit the same individual repeatedly. The flight leaves behind a cloud of red smoke, which can passively damage opponents without stunning them while also draining their evasive, the red smoke can only damage someone every 0.6 seconds and is blockable from all sides. They will then remain vulnerable for a short period of time after the flight finishes.",
						"FlavorText": "im hungry",
						"Data":{
							"Damage": "1.3 | (1 / .6s) for fog",
							"Cooldown": "18s",
						},
						"Properties":{
							"Blockability": "Blockable",
							"Interruptability": "Interruptible",
							"Target": "Bypasses Ragdoll",
						},
						"Tag":{
							"Color": "darkred",
							"Text": "Awk. Skill II",
						},
						"NameColors":{
							"Color": "#7c0000",
							"ShadowColor": "#400000",
						},
					},
				},
				3: {
					0: {
						"Name": "Shallow Swarm",
						"Description": "The user will extend their arm forward, during this period they are completely vulnerable to all attacks. They will then proceed to release a swarm of red smoke that drains evasive, while gaining I-frames. Once they finish, they will shoot out a bigger wall of red smoke that sends the enemy flying away while also draining the evasive. The move doesn't do true ragdoll, but due to the evasive drain, the target will always be unable to use evasive. The I-frames don't last until the attack is finished and only stays for a short period of time.",
						"FlavorText": "ewwww",
						"Data":{
							"Damage": "(2.5*10) + 12 | (Total of 37)",
							"Cooldown": "15s",
						},
						"Properties":{
							"Blockability": "Blockable",
							"Interruptability": "Partly Interruptible",
							"Target": "Bypasses Ragdoll",
							"Ragdoll": "True Ragdoll",
						},
						"Tag":{
							"Color": "darkred",
							"Text": "Awk. Skill III",
						},
						"NameColors":{
							"Color": "#7c0000",
							"ShadowColor": "#400000",
						},
					},
					1: {
						"Name": "Deep Blow",
						"Description": "The user will prepare a powerful punch, before lunging forwards at incredible speeds. Once the lunge is initiated, the user may no longer change the direction. The move is split into two variations, early punch, and late punch. Early punch happens during the first half of the lunge, where it deals more damage and sends the enemy further away. Late punch happens during the second half of the lunge, where it deals less damage and has a less powerful throw as well as being unblockable. A gust of wind emerges once the halfway point has been reached. The early punch will also release a bigger gust. One may also differentiate the punch by the sound effects.",
						"FlavorText": "ouchhh impact",
						"Data":{
							"Damage": "28 (early punch) | 20 (late punch)",
							"Cooldown": "15s",
						},
						"Properties":{
							"Blockability": "Partly Blockable",
							"Interruptability": "Uninterruptible",
							"Target": "Bypasses Ragdoll",
						},
						"Tag":{
							"Color": "red",
							"Text": "Heavy Variant",
						},
						"NameColors":{
							"Color": "#7c0000",
							"ShadowColor": "#400000",
						},
					},
				},
				4: {
					0: {
						"Name": "Devastating Blows",
						"Description": "The user will unleash a series of powerful punches that breaks the ground with every blow, while gaining full I-frames. They end the combo with a powerful kick to the ground. The final two punches before the kick deals more stun and damage.",
						"FlavorText": "these blows are pretty devastating",
						"Data":{
							"Damage": "9 + (5*7) + (7*2) + 9 | (Total of 67)",
							"Cooldown": "17s",
						},
						"Properties":{
							"Blockability": "Unblockable",
							"Interruptability": "Uninterruptible",
							"Target": "Bypasses Ragdoll",
						},
						"Tag":{
							"Color": "darkred",
							"Text": "Awk. Skill IV",
						},
						"NameColors":{
							"Color": "#7c0000",
							"ShadowColor": "#400000",
						},
					},
				},
			},
		},
	},
	"Prime Judge":{
		"Content":``,
		"CharacterInfo":{
			"Name": "Prime Judge",
			"Description": "A character based on Minos Prime from ULTRAKILL.",
			"FlavorText": "thy end is now!!!",
			"Image": "./contents/prime_judge.png",
			"NameColors":{
				"Color": "#c1ffff",
				"ShadowColor": "#fff",
			},
			"CCTag":"PrimeJudgeCode",
		},
		"Skillset":{
			"Base": {

			},
		}
	}
};

export const hData = {
	"CCTags":{
"DisgraceCode": window.DisgraceCode,
"PrimeJudgeCode": window.PrimeJudgeCode,
	},
}