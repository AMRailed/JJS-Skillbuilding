export const data = {
	"Info":{
		"Content":`
Makeshift wiki for all my characters.

All characters are open source.
		`,
	},
	"Disgrace":{
		"Content":``,
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
					"Color": "#ffffff",
					"ShadowColor": "#f1f1f1",
				}
			},
			1: {
				"Name": "Upperhand ",
				"Description": "The user switches into a heavier attacking mode, which affects his M1's and some of his moves. While on this heavy mode, their fists becomes covered in hardened flesh. It also shortens their M1 string to two M1's with noticeably slower attack speeds. The first heavy M1 can partly bypass block but if blocked, it won't stun. The final heavy M1 fully block breaks and it deals extra damage if the target was blocking as well as playing a short animation for both parties. The final heavy M1 also bypasses ragdoll but will grant extra evasive to the target if hit during ragdoll.",
				"Data":{
					"Damage": "5+5 (Extra damage if target was blocking)",
					"Effect": "Shorter M1 string, slower attack speeds, first heavy M1 partly bypasses block, final heavy M1 fully block breaks and bypasses ragdoll.",
					"Cooldown": "0.2s",
				},
				"Properties":{
					"Blockability": "Semi-Blockable",
					"Interruptability": "Interruptable",
					"Target": "SemiBypasses Ragdoll",
				},
				"Tag":{
					"Color": "orange",
					"Text": "Special",
				},
				"NameColors":{
					"Color": "#ffffff",
					"ShadowColor": "#f1f1f1",
				}
			},
		},
	},
	};