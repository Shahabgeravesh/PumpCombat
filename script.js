const data = [
  {
    id: "bodypump",
    name: "BodyPump",
    releases: [
      {
        id: "135",
        title: "BodyPump 135",
        theme: "Slow, steady tempos with big strength endurance focus.",
        duration: "55 minutes",
        bpm: "128-132 BPM",
        focus: "Time under tension + athletic strength",
        tracks: [
          {
            id: "warmup",
            title: "01. Warm-up",
            color: "#ff7a59",
            song: "Here in Your Arms",
            duration: "5:10",
            weights: "Light barbell",
            focus: "Full-body prep + range + posture",
            timing: "4/4, 3/1, 1/1/1/1, 2/2",
            musicCues: [
              "0:05 Intro - Set up",
              "0:12 V1 - Deadlift 4/4",
              "0:43 Ref - Deadrow 1/1/1/1",
              "1:43 V2 - Clean & Press 2/2/2/2",
              "2:14 O/H Press 2/2",
              "2:45 V3 - Wide Squat 4/4",
              "4:01 Lunge L",
              "4:31 Lunge R",
              "5:02 Outro - Bar down"
            ],
            roundNotes: "Round 1 is the teaching round: set position + clean transitions before squats/lunges.",
            roundTips: [
              "Say the next move on the last 2 counts to lock transitions.",
              "Use Round 1 to teach posture and timing, then just count."
            ],
            sequence: [
              "Block 1: Deadlift 4/4 x2 → 3/1 x4 → Deadrow 1/1/1/1 x4",
              "Block 2: Triple wide deadrow x4 → Upright row 4/4 x2",
              "Block 3: Clean & press 2/2/2/2 x2 → 1/1/1/1 x4 → O/H press 2/2 x4",
              "Block 4: Wide squat 4/4 x2",
              "Block 4: Wide squat 3/1 x4",
              "Block 4: Wide squat 2/2 x4",
              "Block 4: Wide squat 1/1 x8",
              "Block 4: Wide squat 2/2 x4",
              "Block 5: Lunges L then R (4/4 x2 → 2/2 x4 → 2/2 x4 → 4/4 x2)"
            ],
            coaching: [
              "Set posture early: ribs down, long spine, core braced",
              "Use last counts for transitions (wide grip, bar to back)",
              "Light load, crisp timing"
            ],
            memoryHook: "DL → DRow → Wide → UR → C&P → OHP → Squat → Lunge"
          },
          {
            id: "squats",
            title: "02. Squats",
            color: "#f7b500",
            song: "Sound of You",
            duration: "5:58",
            weights: "Heavy barbell (new: light barbell)",
            focus: "Mid, wide, wider stance strength",
            timing: "4/4, 2/2, 1/1/2, bottom halves",
            musicCues: [
              "0:05 Intro - Set up mid stance",
              "0:28 4/4 mid stance",
              "1:26 2/2 mid stance",
              "1:50 1/1/2 mid stance",
              "2:01 Wide stance starts",
              "3:34 Bottom halves",
              "3:58 Wider stance (repeat block 2)"
            ],
            roundNotes: "Round 1 mid stance. Round 2 wide stance. Round 3 wider stance (repeat block 2).",
            roundTips: [
              "Call the stance change 4 counts early.",
              "Round 3 is the same as Round 2: remind them it’s the repeat."
            ],
            sequence: [
              "Block 1 (Mid): 4/4 x10 → 2/2 x8 → 1/1/2 x4",
              "Block 2 (Wide): 4/4 x4 → 3/1 x8 → 2/2 x8 → 1/1/2 x8 → bottom halves 32cts x2",
              "Block 3 (Wider): Repeat Block 2 in wider stance"
            ],
            coaching: [
              "Hips back and down, chest lifted",
              "Push knees out for glute load",
              "Stay in the range, no rest at top"
            ],
            memoryHook: "Mid → Wide → Wider, finish with bottom halves"
          },
          {
            id: "chest",
            title: "03. Chest",
            color: "#e94f8a",
            song: "Gnarly",
            duration: "4:38",
            weights: "Medium-heavy barbell",
            focus: "Slow press + time under tension",
            timing: "2/2, staggered 2/2, bottom halves",
            musicCues: [
              "0:05 Intro - Set up",
              "0:10 Chest Press 2/2",
              "0:35 Staggered Press 2/2",
              "0:50 Bottom halves",
              "1:18 Hold",
              "2:19 Recovery",
              "2:27 Repeat block 1"
            ],
            roundNotes: "Round 1 includes the hold after bottom halves; Round 2+ repeats the full block.",
            roundTips: [
              "Use the hold to reset shoulders and ribs.",
              "Later rounds are the same—count confidently."
            ],
            sequence: [
              "Block 1: Chest press 2/2 x7",
              "Block 1: Staggered press 2/2 x4",
              "Block 1: Bottom halves 8cts x8",
              "Block 1: Hold",
              "Block 2: Chest press 2/2 x4",
              "Block 2: Staggered press 2/2 x4",
              "Block 2: Bottom halves 8cts x8",
              "Block 3: Repeat block 1 + block 2 (36x8)"
            ],
            coaching: [
              "Shoulder blades down and back",
              "Elbows to bench height for range",
              "Drive feet into floor for stability"
            ],
            memoryHook: "Press → stagger → bottom halves → hold"
          },
          {
            id: "back",
            title: "04. Back",
            color: "#6c63ff",
            song: "Stacks",
            duration: "4:57",
            weights: "Medium-heavy barbell + optional extra plates",
            focus: "Posterior chain power + strong rows",
            timing: "4/4, 3/1, 1/1/1/1",
            musicCues: [
              "0:05 Intro - Set up",
              "0:19 Deadlift 4/4",
              "0:46 Deadrow 1/1/1/1",
              "1:00 Clean & Press",
              "1:27 Wide Deadrow",
              "1:44 Triple Wide Deadrow",
              "1:58 Recovery",
              "2:12 Deadlift 3/1",
              "2:39 Clean & Press",
              "4:43 Outro - Wide Deadlift"
            ],
            roundNotes: "Round 1 includes wide deadrow and triple wide deadrow before recovery; Round 2 repeats with triple wide finish.",
            roundTips: [
              "Cue “hands wide” on the last 2 counts before wide deadrow.",
              "Round 2 ends with triple wide—remind them it’s the big finish."
            ],
            sequence: [
              "Block 1: Deadlift 4/4 x2 → 3/1 x4 → Deadrow 1/1/1/1 x4 → Clean & press 1/1/1/1 x8",
              "Add: Wide deadrow x5 → triple wide deadrow x2 → recovery",
              "Block 2: Deadlift 3/1 x4 → Deadrow 1/1/1/1 x4 → Clean & press 1/1/1/1 x8 → triple wide deadrow x2",
              "Block 3: Repeat block 2 (24x8) → Outro wide deadlift 4/4 x2"
            ],
            coaching: [
              "Hinge from hips, chest lifted",
              "Bar close to body, squeeze shoulder blades",
              "Use legs to drive cleans"
            ],
            memoryHook: "DL → DRow → C&P → Wide DRow"
          },
          {
            id: "triceps",
            title: "05. Triceps",
            color: "#3bb273",
            song: "Super Graphic Ultra Modern Girl (alt: Golden Sun)",
            duration: "5:01",
            weights: "2x light-medium plates + 1x medium plate",
            focus: "Dips + overhead + plate extensions",
            timing: "4/4, 2/2, combo 1/1 + 2/2",
            musicCues: [
              "0:05 Set up Tricep Dip",
              "0:13 Dips 4/4",
              "0:43 Combo 1",
              "1:13 Transition to Seated O/H Extension",
              "1:29 O/H Extension 2/2",
              "3:06 Transition to Plate Extension",
              "3:23 Plate Extension 2/2",
              "4:26 Combo 1",
              "4:56 Finish"
            ],
            roundNotes: "Round 1 starts with dips; later rounds move to seated O/H then plate extensions.",
            roundTips: [
              "Use Round 1 to demo the combo (1/1 then 2/2).",
              "Announce the equipment swap early: plate → bench."
            ],
            sequence: [
              "Tricep dip: 4/4 x2 → 2/2 x4 → Combo (1/1 x2 + 2/2) x4",
              "Seated O/H extension: 2/2 x4 → Combo x4 → 2/2 x4 → hold → Combo → 2/2 x1",
              "Plate extension: 2/2 x4 → Combo x4 → 2/2 x4 → hold → Combo → 2/2 x1"
            ],
            coaching: [
              "Elbows in, chest lifted",
              "Lock shoulder position for isolation",
              "Offer bench option for dips"
            ],
            memoryHook: "Dip → O/H → Plate, combos every time"
          },
          {
            id: "biceps",
            title: "06. Biceps",
            color: "#1fb5b5",
            song: "R U Sleeping",
            duration: "4:53",
            weights: "Light-medium barbell + light-medium plates",
            focus: "Tension + control with curls",
            timing: "4/4, 2/2, 3/1, combo 1/1/2",
            musicCues: [
              "0:07 Set up Plate Curl",
              "0:12 Plate Curl 4/4",
              "0:29 Combo 1",
              "0:51 3/1 Plate Curl",
              "1:35 Transition to Bar",
              "1:40 Bar Curl 3/1",
              "2:24 Transition to Plates",
              "3:57 Repeat block 2"
            ],
            roundNotes: "Round 1 is plates; Round 2 shifts to barbell; Round 3 returns to plates and repeats.",
            roundTips: [
              "Say “plates now, bar next” during the first combo.",
              "Round 3 mirrors Round 1—tell them it’s the repeat."
            ],
            sequence: [
              "Plates: 4/4 x1 → 2/2 x4 → Combo (2/2 + 1/1/2) x4 → 3/1 x8 → Combo x4",
              "Barbell: 3/1 x8 → Combo x4",
              "Plates: 4/4 x2 → 2/2 x4 → Combo x4 → 3/1 x8 → Combo x4 → Repeat block 2"
            ],
            coaching: [
              "Elbows under shoulders, body still",
              "Control the negative on 3/1",
              "Twist plates on plate curl"
            ],
            memoryHook: "Plates → Bar → Plates, combo keeps returning"
          },
          {
            id: "lunges",
            title: "07. Lunges",
            color: "#ff9f1c",
            song: "Mind Still",
            duration: "5:00",
            weights: "Medium-heavy plate (options: barbell/bodyweight)",
            focus: "Front rack stability + unilateral strength",
            timing: "2/2, 3/1, 1/1, 1/2/1, pulses",
            musicCues: [
              "0:05 Set up Front Rack L",
              "0:19 Lunge L 2/2",
              "1:02 Lunge L 1/1",
              "1:16 Lunge L 1/2/1",
              "1:59 Bottom pulses",
              "2:27 Repeat block on R"
            ],
            roundNotes: "Round 1 left side; Round 2 repeats the same block on right side.",
            roundTips: [
              "Call out the switch on the last 4 counts.",
              "Say “same pattern, other side” to reduce confusion."
            ],
            sequence: [
              "Front rack lunge L: 2/2 x6 → 3/1 x6 → 1/1 x8 → 1/2/1 x4",
              "Then 4/4 x2 → 1/1 x8 → bottom pulses x4",
              "Repeat full block on R side (40x8)"
            ],
            coaching: [
              "Square hips and shoulders forward",
              "Long step, back knee down",
              "Brace core to stabilize the offset load"
            ],
            memoryHook: "Offset rack L then R, pulses at the end"
          },
          {
            id: "shoulders",
            title: "08. Shoulders",
            color: "#7c3aed",
            song: "Lift Off",
            duration: "6:18",
            weights: "Light-medium barbell + light plates",
            focus: "3D shoulder work + compound finish",
            timing: "4/4, 2/2, 1/1, 2/2/2/2",
            musicCues: [
              "0:05 Rear Fly set up",
              "0:19 Rear Fly 4/4",
              "0:46 Side Raise 2/2",
              "1:00 Side Raise/Forward Press combo",
              "1:41 Pushups 2/2",
              "2:08 Repeat block 1",
              "4:12 Transition to bar",
              "4:25 Upright Row",
              "5:20 O/H Press"
            ],
            roundNotes: "Round 1 is plate work + pushups; Round 2 repeats, then transitions to barbell.",
            roundTips: [
              "Warn the barbell transition 8 counts early.",
              "Round 2 = repeat plate block before barbell."
            ],
            sequence: [
              "Plates: Rear fly 4/4 x2 → 2/2 x4 → side raise 2/2 x4",
              "Combo: side raise/forward press 2/2/2/2 x2 → 1/1/1/1 x7",
              "Pushups: 2/2 x4 → 1/1 x8 → repeat block 1 (36x8) + hold",
              "Barbell: Upright row 4/4 x2 → 2/2 x4 → 1/1 x8 → 2/2 x4",
              "O/H press: 1/1 x8 → 2/2 x4 → 1/1 x8 → 2/2 x4 (option push press)"
            ],
            coaching: [
              "Lead with elbows, shoulders away from ears",
              "Core braced for pressing",
              "Use legs for push press if needed"
            ],
            memoryHook: "Plates + pushups, then barbell rows → presses"
          },
          {
            id: "core",
            title: "09. Core",
            color: "#0ea5e9",
            song: "Gasolina",
            duration: "5:34",
            weights: "Barbell + light/medium plates",
            focus: "Posterior chain + deep core",
            timing: "4/4, 2/2, triple pulse, 1/1/2",
            musicCues: [
              "0:05 Hip Bridge set up",
              "0:12 Hip Bridge 4/4",
              "1:13 Triple-pulse Hip Bridge",
              "1:59 Transition to Hover",
              "2:30 Rotating Side Hover L",
              "3:00 Transition to Shootout",
              "3:08 Shootout",
              "3:46 Repeat block on R"
            ],
            roundNotes: "Round 1 left-side hover; Round 2 repeats hover/side hover/shootout on right.",
            roundTips: [
              "Say “left now, right later” during the first hover.",
              "Keep the same timing on the other side."
            ],
            sequence: [
              "Weighted hip bridge: 4/4 x4 → 2/2 x8 → triple-pulse x12",
              "Hover + rotating side hover L: 2/2 x8",
              "Shootout: 2/2 x6 → 1/1/2 x4",
              "Repeat hover/side hover/shootout on R side (28x8)"
            ],
            coaching: [
              "Bar over hip crease, drive through heels",
              "Keep hips in line in hover",
              "Keep lower back close to floor on shootouts"
            ],
            memoryHook: "Bridge → Hover L → Shootout → Repeat R"
          },
          {
            id: "cooldown",
            title: "10. Cooldown",
            color: "#94a3b8",
            song: "Ate That",
            duration: "3:16",
            weights: "Bodyweight",
            focus: "Full-body stretch + recovery",
            timing: "2x8 and 4x8 holds",
            musicCues: [
              "0:05 Hip Flexor stretch",
              "0:14 Hip Flexor + Tricep stretch R",
              "0:32 Kneeling Hamstring L",
              "1:00 Hip Flexor + Tricep stretch L",
              "1:19 Kneeling Hamstring R",
              "1:37 Down Dog",
              "1:46 90/90 Glute stretch L",
              "2:05 90/90 Glute stretch R",
              "2:37 Standing Quad L",
              "2:46 Standing Quad R",
              "2:56 Upper Back stretch",
              "3:05 Chest stretch"
            ],
            sequence: [
              "Kneeling hip flexor + tricep stretch R then L",
              "Kneeling hamstring stretch L then R",
              "Down dog → 90/90 glute stretch L then R",
              "Standing quad stretch L then R",
              "Upper back stretch → chest stretch"
            ],
            coaching: [
              "Breathe slow, lengthen into each stretch",
              "Acknowledge effort and recovery",
              "Guide where they should feel it"
            ],
            memoryHook: "Hip flexor → hamstring → down dog → 90/90 → standing"
          }
        ]
      }
    ]
  },
  {
    id: "bodycombat",
    name: "BodyCombat",
    releases: [
      {
        id: "106",
        title: "BodyCombat 106",
        theme: "Feel the fire with bold beats, big combos, and strong cardio peaks.",
        duration: "55 minutes",
        bpm: "Varied",
        focus: "Cardio + power + core",
        tracks: [
          {
            id: "bc-warmup-upper",
            title: "01A. Upper Body Warm-up",
            color: "#f59e0b",
            song: "Fighting For",
            duration: "4:01",
            weights: "Bodyweight",
            focus: "Boxing basics + rhythm",
            timing: "7-punch combos + pulses",
            musicCues: [
              "0:05 Intro - L stance",
              "0:09 Jab/Cross",
              "0:31 7-punch + pulse",
              "0:57 Hooks",
              "1:09 Hooks + Jumping Jacks",
              "1:35 Uppercuts + pulse",
              "2:07 Repeat A-C on R"
            ],
            roundNotes: "Left side first, then repeat the same sequences on right.",
            roundTips: [
              "Call the stance change on the last 2 counts.",
              "Say the combo name, then count it."
            ],
            sequence: [
              "A: Jab, Cross (7 punches) + pulse F&B",
              "B: Hooks + Jumping Jacks (option: squats)",
              "C: Uppercuts (7 punches) + pulse F&B",
              "Repeat A–C on the right side"
            ],
            coaching: [
              "Chin tucked, guard up",
              "Soft knees, rotate through hips",
              "Punch to nose/chin target"
            ],
            memoryHook: "Jab/Cross → Hooks+Jacks → Uppercuts"
          },
          {
            id: "bc-warmup-lower",
            title: "01B. Lower Body Warm-up",
            color: "#f59e0b",
            song: "Noche (Remix)",
            duration: "4:10",
            weights: "Bodyweight",
            focus: "Kicks + stance control",
            timing: "Slow, clear kicks + pulses",
            musicCues: [
              "4:01 Intro - Prepare Ginga",
              "4:03 Half Ginga",
              "4:16 Squat Pulse",
              "4:30 Front Knee + Front Kick to corner",
              "4:57 Side Kick",
              "5:25 Roundhouse setup",
              "5:38 Roundhouse kick",
              "6:06 Repeat on R"
            ],
            roundNotes: "Left corner first, then repeat the same sequences to the right.",
            roundTips: [
              "Cue the corner change early.",
              "Keep kicks low for control."
            ],
            sequence: [
              "Half Ginga → Squat Pulse",
              "Front Knee + Front Kick to corner",
              "Side Kick + Pulse OTS",
              "Roundhouse setup → Roundhouse kick",
              "Repeat D–H on right side"
            ],
            coaching: [
              "Chest lifted, abs braced",
              "Strike low to warm joints",
              "Reset stance between kicks"
            ],
            memoryHook: "Ginga → Knee/Kick → Side Kick → Roundhouse"
          },
          {
            id: "bc-combat-1",
            title: "02. Combat 1",
            color: "#ef4444",
            song: "Rave Tool",
            duration: "4:31",
            weights: "Bodyweight",
            focus: "Kick-boxing + TKD speed",
            timing: "Uppercuts + hook/kick + front kicks",
            musicCues: [
              "0:00 Intro",
              "0:06 Uppercuts + pulse",
              "0:32 Uppercuts + Hook + Roundhouse",
              "1:01 Front Kick + pulses",
              "1:36 12 Front Kicks",
              "1:48 Combo A2",
              "2:20 Repeat on R"
            ],
            roundNotes: "Left side sequences first, then repeat on right.",
            roundTips: [
              "Preview combo on the last 8 counts.",
              "Front kicks stay light and fast."
            ],
            sequence: [
              "A: Uppercuts + pulse → add Hook + Roundhouse",
              "B: Front Kick + pulses → 3x front kick → 12x front kick",
              "Repeat A–B + A on right side"
            ],
            coaching: [
              "Heavy back leg, light front leg",
              "Kick with ball of foot",
              "Stay agile between pulses"
            ],
            memoryHook: "Uppercuts → Hook/Roundhouse → Front Kicks"
          },
          {
            id: "bc-pt-1",
            title: "03. Power Training 1",
            color: "#10b981",
            song: "Polarised",
            duration: "6:49",
            weights: "Bodyweight",
            focus: "Boxing power + footwork",
            timing: "Run OTS + 6-punch combo + roll",
            musicCues: [
              "0:08 Run OTS",
              "0:27 Jab/Cross",
              "0:49 Add Hooks",
              "1:11 Uppercuts + Jumping Jacks",
              "1:58 Run OTS",
              "2:17 Jab/Cross/Jab + Step",
              "2:39 Power Hook",
              "3:01 Continuous Jabs",
              "3:48 Repeat on R"
            ],
            roundNotes: "First half left lead, then repeat A–D on right.",
            roundTips: [
              "Call the roll on the step.",
              "Reset stance before the power hook."
            ],
            sequence: [
              "Run OTS → Combo A: Jab/Cross x2 + Hooks",
              "Combo B: Uppercut x2 + Jumping Jacks",
              "Run OTS → Combo C: Jab/Cross/Jab + step out/in + roll + power hook",
              "Finish with continuous jabs, then repeat on right"
            ],
            coaching: [
              "Keep guard high between punches",
              "Use hips for hook power",
              "Stay light on feet during runs"
            ],
            memoryHook: "Run → 6 punches → Uppercuts/Jacks → Roll+Power Hook"
          },
          {
            id: "bc-combat-2",
            title: "04. Combat 2",
            color: "#ef4444",
            song: "Whole Team Winning",
            duration: "5:26",
            weights: "Bodyweight",
            focus: "Knees + jump kicks + TKD finesse",
            timing: "Knee triples + step/jump kick + roundhouse knees",
            musicCues: [
              "0:00 Intro",
              "0:12 3 Knees + Step Kick",
              "0:37 Hop Knee + Jump Kick",
              "1:05 Jab/Parry/Jab",
              "1:17 Step Over Back Fist",
              "1:51 Hop Knee + Jump Kick",
              "2:28 Roundhouse Knees",
              "2:53 Repeat on R"
            ],
            roundNotes: "Left side sequence first, then repeat A–C on right.",
            roundTips: [
              "Call the corner change on the last 4 counts.",
              "Offer grounded options early."
            ],
            sequence: [
              "A: 3 Knees to front → Step/Jump Kick to corner",
              "B: Jab, Parry, Jab → Step-over Back Fist (option: leg check)",
              "C: Roundhouse Knee repeater",
              "Repeat A–C on right side"
            ],
            coaching: [
              "Strong guard before kicks",
              "Pivot on back fist",
              "Drive knees up, core tight"
            ],
            memoryHook: "Knees → Back Fist → Roundhouse Knees"
          },
          {
            id: "bc-pt-2",
            title: "05A/05B. Power Training 2",
            color: "#10b981",
            song: "Don Dada / See It Thru",
            duration: "5:53",
            weights: "Bodyweight (optional mat)",
            focus: "MMA conditioning + cardio spikes",
            timing: "Plank/squat blocks → pushups → strikes → sprawls",
            musicCues: [
              "0:01 Prep (plank/squat)",
              "0:14 Extended Plank combo slow",
              "0:52 Extended Plank combo fast",
              "1:30 Pushups 4/4",
              "1:55 Pushups 1/1",
              "2:17 Pushup pulse",
              "2:31 Run OTS",
              "2:53 Jab/Cross/Uppercut L",
              "3:15 Jab/Cross/Uppercut R",
              "3:48 Decoy combo",
              "3:59 Decoy + Sprawl",
              "4:22 Sprawl to front",
              "4:55 Repeat on R"
            ],
            roundNotes: "Block 2 striking repeats left then right with decoys and sprawls.",
            roundTips: [
              "Call floor vs standing options clearly.",
              "Cue the sprawl early (last 8 counts)."
            ],
            sequence: [
              "Block 1: Extended plank combo (or squats) → pushups (or side lunges) → pulses",
              "Block 2: Run OTS → Jab/Cross/Uppercut (L then R)",
              "Add Decoy → Sprawl with vertical leap → repeat on right",
              "Finish with front-facing sprawls"
            ],
            coaching: [
              "Hands under shoulders in plank",
              "Soft landing on sprawls",
              "Power up after 8 reps"
            ],
            memoryHook: "Conditioning → Strikes → Decoy → Sprawl"
          },
          {
            id: "bc-combat-3",
            title: "06. Combat 3",
            color: "#ef4444",
            song: "BZL",
            duration: "4:13",
            weights: "Bodyweight",
            focus: "Capoeira flow + leg burn",
            timing: "Half ginga + esquiva + pulses",
            musicCues: [
              "0:07 Half Ginga + Esquiva R",
              "0:51 Esquiva + Knee Lift",
              "1:06 Squat Pulse + Lunge Pulse",
              "1:35 Repeat A",
              "2:12 Repeat on L"
            ],
            roundNotes: "Right side first, then repeat A–C on left.",
            roundTips: [
              "Keep it on the spot and flow.",
              "Drop deeper after 4 reps."
            ],
            sequence: [
              "A: Half Ginga + Forward-Facing Esquiva",
              "B: Esquiva with Knee Lift",
              "C: Squat Pulse + Lunge Pulse",
              "Repeat A–C on left side"
            ],
            coaching: [
              "Hips square, chest lifted",
              "Sink low in esquiva",
              "Smooth tempo"
            ],
            memoryHook: "Ginga → Esquiva → Squat/Lunge"
          },
          {
            id: "bc-muay-thai",
            title: "07. Muay Thai",
            color: "#ef4444",
            song: "Bla Bla",
            duration: "6:02",
            weights: "Bodyweight",
            focus: "Elbows + knees rounds",
            timing: "Knees → elbows → descending elbows",
            musicCues: [
              "0:05 Knees",
              "0:32 Running Knees",
              "0:55 Horizontal Elbows",
              "1:07 Elbows + Back/Hop Knee",
              "1:36 Descending Elbows",
              "2:28 Repeat B1",
              "3:02 Repeat on R",
              "5:30 Final Knees"
            ],
            roundNotes: "Round patterns repeat on right after left.",
            roundTips: [
              "Call the elbow direction clearly.",
              "Offer grounded knees early."
            ],
            sequence: [
              "Round 1: Knees → running knees → elbows + back/hop knee",
              "Round 2: Descending elbows + hold OTS",
              "Repeat sequences on right",
              "Final round: Knees + running knees finisher"
            ],
            coaching: [
              "Pull elbows down with power",
              "Drive knee to stomach",
              "Stay tight in guard"
            ],
            memoryHook: "Knees → Elbows → Descending elbows → Finish knees"
          },
          {
            id: "bc-pt-3",
            title: "08. Power Training 3",
            color: "#10b981",
            song: "Cry",
            duration: "6:19",
            weights: "Bodyweight",
            focus: "Boxing power + running",
            timing: "Jab/cross combos + runs + jump jabs",
            musicCues: [
              "0:22 Run OTS",
              "0:44 Jab/Cross",
              "1:06 Double Jab + Uppercut",
              "1:28 Uppercut hold",
              "2:12 Power Jabs + Run",
              "2:35 Jump Jabs + Run",
              "2:57 Front stance jabs",
              "3:41 Repeat on R"
            ],
            roundNotes: "Left side sequences first, then repeat A–E on right.",
            roundTips: [
              "Use the run to reset the guard.",
              "Offer walking jabs instead of jumps."
            ],
            sequence: [
              "Run OTS → Jab/Cross → Double Jab + Uppercut",
              "Uppercut hold",
              "Power Jabs + Run OTS",
              "Jump Jabs forward + Run back",
              "Front stance jabs, then repeat on right"
            ],
            coaching: [
              "Soft knees on runs",
              "Explode through hips on power jabs",
              "Stay light and fast"
            ],
            memoryHook: "Run → Combo → Uppercut hold → Power jabs → Jump jabs"
          },
          {
            id: "bc-conditioning",
            title: "09. Conditioning",
            color: "#0ea5e9",
            song: "Unreal",
            duration: "3:34",
            weights: "Medicine ball optional",
            focus: "Core isolation + integration",
            timing: "Crunch/throw → leg drops → hover → climbers",
            musicCues: [
              "0:00 Transition to floor",
              "0:08 Crunch + Med Ball Throw",
              "0:35 Speed Leg Drops",
              "1:01 Repeat A",
              "1:54 Repeat A",
              "2:47 Recover to Hover",
              "2:55 Hover",
              "3:13 Cross Mountain Climbers",
              "Hold Plank"
            ],
            roundNotes: "Three supersets, then hover + cross climbers finisher.",
            roundTips: [
              "Keep cues short; they’re on the floor.",
              "Offer toe-tap option on leg drops."
            ],
            sequence: [
              "Pulse Crunch x2 + Medicine Ball Throw (x3 rounds)",
              "Speed Leg Drops (x3 rounds)",
              "Hover → Plank hold",
              "Cross Mountain Climbers + hold plank"
            ],
            coaching: [
              "Ribs to hips on crunch",
              "Lower back stays down on leg drops",
              "Shoulders over elbows in hover"
            ],
            memoryHook: "Crunch/Throw → Leg Drop → Hover → Climbers"
          },
          {
            id: "bc-cooldown",
            title: "10. Cooldown",
            color: "#94a3b8",
            song: "Sapphire (Unplugged)",
            duration: "2:56",
            weights: "Bodyweight",
            focus: "Full-body stretch + recovery",
            timing: "Long holds + gentle transitions",
            musicCues: [
              "0:00 Hip Flexor + Shoulder/Triceps R",
              "0:30 Hamstring L",
              "0:50 Hip Flexor + Shoulder/Triceps L",
              "1:20 Hamstring R",
              "1:40 Transition to standing",
              "1:49 Quad L",
              "1:59 IT Band L",
              "2:09 Quad R",
              "2:19 IT Band R",
              "2:29 Celebrate"
            ],
            sequence: [
              "Kneeling hip flexor + shoulder/triceps stretch R",
              "Kneeling hamstring stretch L",
              "Kneeling hip flexor + shoulder/triceps stretch L",
              "Kneeling hamstring stretch R",
              "Standing quad + IT band stretches, then celebrate"
            ],
            coaching: [
              "Breathe into each stretch",
              "Relax shoulders, soften knees",
              "Celebrate the finish"
            ],
            memoryHook: "Hip flexor → hamstring → switch → standing"
          }
        ]
      }
    ]
  }
];

const programSelect = document.getElementById("programSelect");
const releaseSelect = document.getElementById("releaseSelect");
const trackGrid = document.getElementById("trackGrid");
const releaseSummary = document.getElementById("releaseSummary");
const printButton = document.getElementById("printButton");
const expandAllButton = document.getElementById("expandAllButton");
const collapseAllButton = document.getElementById("collapseAllButton");

const storageKey = (releaseId, trackId) =>
  `bodypump-cheatsheet:${releaseId}:${trackId}`;

const populateSelect = (select, options) => {
  select.innerHTML = "";
  options.forEach((option) => {
    const el = document.createElement("option");
    el.value = option.id;
    el.textContent = option.name || option.title;
    select.appendChild(el);
  });
};

const renderSummary = (release) => {
  releaseSummary.innerHTML = `
    <h2>${release.title}</h2>
    <p>${release.theme}</p>
    <div class="summary-meta">
      <span><strong>Duration:</strong> ${release.duration}</span>
      <span><strong>BPM:</strong> ${release.bpm}</span>
      <span><strong>Focus:</strong> ${release.focus}</span>
      <span><strong>Tracks:</strong> ${release.tracks.length}</span>
    </div>
  `;
};

const renderTracks = (release) => {
  trackGrid.innerHTML = "";

  release.tracks.forEach((track) => {
    const searchableText = [
      track.title,
      track.song,
      track.duration,
      track.focus,
      track.weights,
      track.timing,
      track.sequence.join(" "),
      track.coaching.join(" "),
      track.memoryHook
    ]
      .join(" ")
      .toLowerCase();

    if (!searchableText) {
      return;
    }

    const card = document.createElement("article");
    card.className = "track-card";
    card.innerHTML = `
      <details style="border: 2px solid ${track.color};">
        <summary>
          <div class="track-summary">
            <div class="track-title">
              <span class="track-chip" style="background:${track.color}">
                ${track.title}
              </span>
              <span>${track.song}</span>
            </div>
            <div class="track-song">${track.duration} · ${track.focus}</div>
            <div class="track-song">
              Timing: <span class="count" data-count>${track.timing}</span>
            </div>
            <button class="toggle-hint" type="button" aria-expanded="false">
              Expand
            </button>
          </div>
        </summary>
        <div class="track-body">
          <div class="track-table quick-stats">
            <div class="table-title">Quick Stats</div>
            <table>
              <tbody>
                <tr>
                  <th>Weights</th>
                  <td>${track.weights}</td>
                </tr>
                <tr>
                  <th>Timing</th>
                  <td class="count" data-count>${track.timing}</td>
                </tr>
                <tr>
                  <th>Focus</th>
                  <td>${track.focus}</td>
                </tr>
              </tbody>
            </table>
          </div>
          ${
            track.roundNotes
              ? `
          <div class="track-table round-table">
            <div class="table-title">Round Differences + Tips</div>
            <table>
              <tbody>
                <tr>
                  <th>Difference</th>
                  <td>${track.roundNotes}</td>
                </tr>
                ${
                  track.roundTips?.length
                    ? track.roundTips
                        .map((tip) => `<tr><th>Tip</th><td>${tip}</td></tr>`)
                        .join("")
                    : ""
                }
              </tbody>
            </table>
          </div>
          `
              : ""
          }
          <div class="track-table sequence-map">
            <div class="table-title">Sequence Map (Counts)</div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Block / Move</th>
                </tr>
              </thead>
              <tbody>
                ${(() => {
                  const countPalette = {
                    tempo: {
                      1: { bg: "#f0fdf4", border: "#22c55e" },
                      2: { bg: "#ecfeff", border: "#06b6d4" },
                      3: { bg: "#fef3c7", border: "#f59e0b" },
                      4: { bg: "#fee2e2", border: "#ef4444" }
                    },
                    reps: {
                      2: { bg: "#ede9fe", border: "#8b5cf6" },
                      4: { bg: "#dbeafe", border: "#3b82f6" },
                      8: { bg: "#fef3c7", border: "#f59e0b" },
                      16: { bg: "#fee2e2", border: "#ef4444" }
                    },
                    counts: {
                      8: { bg: "#f5d0fe", border: "#d946ef" },
                      16: { bg: "#fbcfe8", border: "#f472b6" },
                      32: { bg: "#fee2e2", border: "#fb7185" }
                    }
                  };

                  const getCountGroupKey = (value) => {
                    const cleaned = value.replace(/\s+/g, "").toLowerCase();
                    if (/^\d+x\d+$/.test(cleaned)) {
                      return { type: "reps", value: parseInt(cleaned.split("x")[1], 10) };
                    }
                    if (/^\d+x$/.test(cleaned)) {
                      return { type: "reps", value: parseInt(cleaned.replace("x", ""), 10) };
                    }
                    if (/^x\d+$/.test(cleaned)) {
                      return { type: "reps", value: parseInt(cleaned.replace("x", ""), 10) };
                    }
                    if (/^\d+cts?$/.test(cleaned)) {
                      return { type: "counts", value: parseInt(cleaned, 10) };
                    }
                    if (/^\d+(\/\d+)+$/.test(cleaned)) {
                      return { type: "tempo", value: parseInt(cleaned.split("/")[0], 10) };
                    }
                    return null;
                  };

                  const getCountStyle = (value) => {
                    const key = getCountGroupKey(value);
                    const color =
                      key && countPalette[key.type] && countPalette[key.type][key.value]
                        ? countPalette[key.type][key.value]
                        : null;
                    if (!color) {
                      return "";
                    }
                    return `style="--count-bg:${color.bg};--count-border:${color.border};"`;
                  };

                  const expandSequenceItem = (value) => {
                    const parts = value.split("→").map((part) => part.trim());
                    if (parts.length < 2) {
                      const comboMatch = value.match(/\bcombo\b/i);
                      if (!comboMatch) {
                        return value;
                      }
                      return value;
                    }
                    const countPattern =
                      /\b\d+\s*x\s*\d+\b|\b\d+\s*x\b|\bx\s*\d+\b|\b\d+\/\d+\b|\b\d+\s*cts?\b/gi;
                    let lastMove = "";
                    const expanded = parts.map((part) => {
                      const countIndex = part.search(countPattern);
                      const move = countIndex > 0 ? part.slice(0, countIndex).trim() : "";
                      if (move) {
                        lastMove = move;
                        return part;
                      }
                      if (!move && lastMove && countIndex === 0) {
                        return `${lastMove} ${part}`.trim();
                      }
                      return part;
                    });
                    return expanded
                      .map((part) => {
                        if (!/combo/i.test(part) || /\bcombo\b.*:/i.test(part)) {
                          return part;
                        }
                        if (!lastMove) {
                          return part;
                        }
                        return part.replace(/\bcombo\b/i, `Combo: ${lastMove}`);
                      })
                      .join(" → ");
                  };

                  const rows = [];
                  track.sequence.forEach((item) => {
                    const displayItem = expandSequenceItem(item);
                    displayItem
                      .split("→")
                      .map((segment) => segment.trim())
                      .filter(Boolean)
                      .forEach((segment) => rows.push(segment));
                  });

                  return rows
                    .map((item, index) => {
                    const rawMatches =
                      item.match(
                        /\b\d+\s*x\s*\d+\b|\b\d+\s*x\b|\bx\s*\d+\b|\b\d+\/\d+\b|\b\d+\s*cts?\b/gi
                      ) || [];
                    const formatCount = (value) => {
                      const cleaned = value.replace(/\s+/g, "");
                      if (/^\d+x\d+$/i.test(cleaned)) {
                        const times = cleaned.split("x")[0];
                        return `${cleaned} (${times} times)`;
                      }
                      if (/^\d+x$/i.test(cleaned)) {
                        const times = cleaned.replace("x", "");
                        return `${times} times`;
                      }
                      if (/^x\d+$/i.test(cleaned)) {
                        const times = cleaned.replace("x", "");
                        return `${times} times`;
                      }
                      if (/^\d+cts?$/i.test(cleaned)) {
                        return cleaned.replace(/cts?/i, " counts");
                      }
                      return cleaned;
                    };
                    const counts = rawMatches.map(formatCount).join(", ");
                    const fallback = track.timing ? `Timing: ${track.timing}` : "—";
                    const countClass = "count-pill count-inline";
                    const formatInlineCount = (value) => {
                      const cleaned = value.replace(/\s+/g, "");
                      if (/^\d+x\d+$/i.test(cleaned)) {
                        const times = cleaned.split("x")[0];
                        return `${cleaned} (${times} times)`;
                      }
                      if (/^\d+x$/i.test(cleaned)) {
                        const times = cleaned.replace("x", "");
                        return `${times} times`;
                      }
                      if (/^x\d+$/i.test(cleaned)) {
                        const times = cleaned.replace("x", "");
                        return `${times} times`;
                      }
                      if (/^\d+cts?$/i.test(cleaned)) {
                        return cleaned.replace(/cts?/i, " counts");
                      }
                      return cleaned;
                    };
                    const highlightedItem = item.replace(
                      /\b\d+\s*x\s*\d+\b|\b\d+\s*x\b|\bx\s*\d+\b|\b\d+\/\d+\b|\b\d+\s*cts?\b/gi,
                      (match) =>
                        `<span class="${countClass}" ${getCountStyle(match)}>${formatInlineCount(match)}</span>`
                    );
                    return `
                      <tr>
                        <td>${index + 1}</td>
                        <td>${highlightedItem}</td>
                      </tr>
                    `;
                  })
                  .join("");
                })()}
              </tbody>
            </table>
          </div>
          <div class="track-table coaching-cues">
            <div class="table-title">Coaching Cues</div>
            <table>
              <tbody>
                ${track.coaching
                  .map((item) => `<tr><td>•</td><td>${item}</td></tr>`)
                  .join("")}
              </tbody>
            </table>
          </div>
          <div class="track-highlight">
            <span>Memory Hook</span>
            <strong>${track.memoryHook}</strong>
          </div>
          <div class="track-section notes">
            <strong>Personal notes</strong>
            <textarea data-track="${track.id}" placeholder="Add what you want to remember..."></textarea>
          </div>
        </div>
      </details>
    `;

    const notesField = card.querySelector("textarea");
    const savedValue = localStorage.getItem(storageKey(release.id, track.id));
    if (savedValue) {
      notesField.value = savedValue;
    }
    notesField.addEventListener("input", (event) => {
      localStorage.setItem(
        storageKey(release.id, track.id),
        event.target.value
      );
    });

    const details = card.querySelector("details");
    const toggleHint = card.querySelector(".toggle-hint");
    const syncToggleHint = () => {
      const isOpen = details.open;
      toggleHint.textContent = isOpen ? "Collapse" : "Expand";
      toggleHint.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };
    details.addEventListener("toggle", syncToggleHint);
    toggleHint.addEventListener("click", (event) => {
      event.preventDefault();
      details.open = !details.open;
      syncToggleHint();
    });
    syncToggleHint();

    trackGrid.appendChild(card);
  });

};

const setAllDetails = (isOpen) => {
  document.querySelectorAll("#trackGrid details").forEach((details) => {
    details.open = isOpen;
  });
};

const getActiveRelease = () => {
  const program = data.find((entry) => entry.id === programSelect.value);
  return program.releases.find((release) => release.id === releaseSelect.value);
};

const refreshRelease = () => {
  const release = getActiveRelease();
  renderSummary(release);
  renderTracks(release);
};

programSelect.addEventListener("change", () => {
  const program = data.find((entry) => entry.id === programSelect.value);
  populateSelect(releaseSelect, program.releases);
  refreshRelease();
});

releaseSelect.addEventListener("change", refreshRelease);
printButton.addEventListener("click", () => window.print());
expandAllButton.addEventListener("click", () => setAllDetails(true));
collapseAllButton.addEventListener("click", () => setAllDetails(false));

populateSelect(programSelect, data);
populateSelect(releaseSelect, data[0].releases);
refreshRelease();
