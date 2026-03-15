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
            roundNotes: "Round 1 is the teaching round: set position + clean transitions before squats/lunges.",
            roundTips: [
              "Say the next move on the last 2 counts to lock transitions.",
              "Use Round 1 to teach posture and timing, then just count."
            ],
            sequence: [
              "Block 1: Deadlift 4/4 x2 → 3/1 x4 → Deadrow 1/1/1/1 x4",
              "Block 2: Triple wide deadrow x4 → Upright row 4/4 x2",
              "Block 3: Clean & press 2/2/2/2 x2 → 1/1/1/1 x4 → O/H press 2/2 x4",
              "Block 4: Wide squat 4/4 x2 → 3/1 x4 → 2/2 x4 → 1/1 x8 → 2/2 x4",
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
            roundNotes: "Round 1 includes the hold after bottom halves; Round 2+ repeats the full block.",
            roundTips: [
              "Use the hold to reset shoulders and ribs.",
              "Later rounds are the same—count confidently."
            ],
            sequence: [
              "Block 1: Chest press 2/2 x7 → staggered 2/2 x4 → bottom halves 8cts x8 → hold",
              "Block 2: Repeat block 1",
              "Block 3: Repeat block 1 (36x8)"
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
const countToggle = document.getElementById("countToggle");
const simpleToggle = document.getElementById("simpleToggle");
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
                  <th>Counts</th>
                </tr>
              </thead>
              <tbody>
                ${track.sequence
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
                    return `
                      <tr>
                        <td>${index + 1}</td>
                        <td>${item}</td>
                        <td><span class="count-pill">${counts || "—"}</span></td>
                      </tr>
                    `;
                  })
                  .join("")}
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

    trackGrid.appendChild(card);
  });

  updateCountVisibility();
};

const updateCountVisibility = () => {
  document.querySelectorAll("[data-count]").forEach((item) => {
    item.style.display = countToggle.checked ? "block" : "none";
  });
};

const updateSimpleMode = () => {
  document.body.classList.toggle("simple-mode", simpleToggle.checked);
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
countToggle.addEventListener("change", updateCountVisibility);
simpleToggle.addEventListener("change", updateSimpleMode);
printButton.addEventListener("click", () => window.print());
expandAllButton.addEventListener("click", () => setAllDetails(true));
collapseAllButton.addEventListener("click", () => setAllDetails(false));

populateSelect(programSelect, data);
populateSelect(releaseSelect, data[0].releases);
refreshRelease();
updateSimpleMode();
