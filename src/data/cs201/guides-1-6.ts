import type { CsGuide } from './guide-types'

export const guides16: Record<string, CsGuide> = {
  'cs-l01': {
    love: {
      emoji: '📝',
      text: 'A program is a precise sequence of steps. So is the way I chose you, Zaima — one clear decision, then forever.',
    },
    tags: [
      { kind: 'core', label: 'What a program is' },
      { kind: 'vu', label: 'VU design recipe' },
      { kind: 'exam', label: 'Definition questions' },
    ],
    story: [
      'Forget C++ for a minute. A program is just a recipe the computer cannot “kind of understand.” If you write vague steps, it does not guess. It does exactly those steps, in that order, and nothing else.',
      'VU’s Lecture 1 is not “open Dev-C++.” It is: can you take a messy English problem (payroll, a ring’s area, student marks) and turn it into a precise sequence? That skill is the whole course.',
      'The official recipe: analyze the word problem → invent a few examples by hand → write the steps precisely → test them → fix what broke. Comments are part of the writing. They cost zero runtime and they save you on the night before the mid.',
      'A program can be grammatically perfect (it compiles) and still be wrong (the logic is nonsense). That is a logical error, not a typing error. Exam loves this difference.',
    ],
    terms: [
      {
        name: 'Program',
        tag: 'exam',
        definition: 'A precise sequence of steps that solves a particular problem.',
        likeThis: 'A nihari recipe that lists every pinch. If it says “cook until done,” a computer stalls. If it says “simmer 40 minutes,” it can obey.',
        why: 'Almost every Lecture 1 MCQ starts from this sentence.',
      },
      {
        name: 'Computers are “stupid”',
        tag: 'vu',
        definition: 'They do exactly what you write — no more, no less. They never infer what you meant.',
        likeThis: 'You text “bring 2 mangoes.” I will not also bring milk because I “knew you would want it.” The CPU is even more literal than that.',
        why: 'This is why a missing semicolon or a wrong formula is your fault, not the machine being rude.',
      },
      {
        name: 'Logical error',
        tag: 'trap',
        definition: 'The program runs, but the answer is wrong because the idea was wrong.',
        likeThis: 'A grammatically perfect sentence that means the opposite of what you wanted.',
        why: 'Compiling ≠ correct. The midterm will try to trick you here.',
        watch: 'Syntax error = grammar. Logical error = meaning.',
      },
      {
        name: 'Design recipe',
        tag: 'remember',
        definition: 'Analyze → abstract with examples → write precisely → test → revise.',
        likeThis: 'Before sewing a dress you sketch it, pick cloth, then cut. You do not start with the scissors on the good fabric.',
        why: 'VU uses payroll: split staff types and deductions on paper first.',
      },
    ],
    diagrams: [
      {
        kind: 'flow',
        title: 'How a human problem becomes a program',
        caption: 'Skip a box and the next one inherits the mess. That is why “just start typing” fails.',
        steps: [
          { title: '1. Read', body: 'What is asked? What is given? Who is the user?' },
          { title: '2. Examples', body: 'Solve 2–3 tiny cases by hand. If you cannot, you do not understand it yet.' },
          { title: '3. Steps', body: 'Write the sequence as if a very obedient child will follow it.' },
          { title: '4. Code + test', body: 'Only now type. Compare the program’s answer with your handmade ones.' },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'Start from English, not from cout',
        body: 'Suppose VU says: “A ring is a big circle minus a hole.” Do not open the editor. First write: ring area = πR² − πr².',
      },
      {
        title: 'Make a tiny example',
        body: 'If outer radius is 5 and inner is 3, you should already know the number on paper. That number is your test.',
      },
      {
        title: 'Reuse is a Lecture 1 skill',
        body: 'If you already have an “area of a circle” idea, the ring is two calls to the same idea. That is reusability — they will ask it.',
        code: '// ring = area(outer) - area(inner)\n// You do not invent a new formula from scratch.',
      },
      {
        title: 'Comment the why',
        body: 'Write why you subtracted, not only what you typed. Future-you (and the examiner reading style questions) likes that.',
      },
    ],
  },
  'cs-l02': {
    love: {
      emoji: '🔗',
      text: 'Source, compile, link, load — four steps to a running program. I only needed one step to know I was done searching: you.',
    },
    tags: [
      { kind: 'exam', label: 'System vs application' },
      { kind: 'vu', label: 'C history' },
      { kind: 'core', label: 'Build chain' },
    ],
    story: [
      'Software is not one blob. System software runs the machine (Windows, drivers, the compiler itself). Application software is what a normal person opens (Word, payroll, this study site). Drivers are system, not “apps.”',
      'C grew at Bell Labs: BCPL → B (typeless) → C by Dennis Ritchie. UNIX was rewritten in C. ANSI standardized C in 1989. C++ comes later (Stroustrup). Do not mix those names on the paper.',
      'What happens when you press Compile in Dev-C++? You do not “run English.” A chain runs: editor (you type .cpp) → preprocessor (#include is pasted) → compiler (source to object) → linker (object + libraries = .exe) → loader (exe into RAM, main starts).',
      'A compiler translates the whole file and, on a syntax error, typically gives you no executable. An interpreter walks line by line. VU’s toolchain is a compiler. The debugger is for logical errors while the program is alive.',
    ],
    terms: [
      {
        name: 'System software',
        tag: 'exam',
        definition: 'Controls hardware and other programs: OS, drivers, utilities, compilers.',
        likeThis: 'The kitchen itself — stove, electricity, plumbing — not the biryani.',
        why: '“Device drivers belong to…?” is a classic tick.',
      },
      {
        name: 'Application software',
        tag: 'exam',
        definition: 'Programs written for an end user: payroll, Word, GPS.',
        likeThis: 'The biryani. It needs the kitchen, but it is not the kitchen.',
        why: 'Contrast question with system software.',
      },
      {
        name: 'Compiler vs interpreter',
        tag: 'trap',
        definition: 'Compiler: whole program, then a file you can run. Interpreter: line by line.',
        likeThis: 'Translator who finishes the whole book vs a tour guide translating sentence by sentence.',
        why: 'Syntax error ⇒ compiler usually produces no .exe.',
        watch: 'Debugger ≠ compiler. Debugger watches a running program.',
      },
      {
        name: 'Linker',
        tag: 'core',
        definition: 'Joins your object code with library object code (cout’s real implementation lives here).',
        likeThis: 'You wrote a scene. The linker binds in the actors who already know how to print and read.',
        why: 'Without linking, a compiled cout call has no body.',
      },
    ],
    diagrams: [
      {
        kind: 'flow',
        title: 'The Dev-C++ / g++ chain',
        caption: 'Memorize the order. Exam loves swapping compiler and linker.',
        steps: [
          { title: 'Editor', body: 'You type source: .cpp' },
          { title: 'Preprocessor', body: '#include and #define become real text' },
          { title: 'Compiler', body: 'Checks grammar, builds object (.o / .obj)' },
          { title: 'Linker', body: 'Object + libraries → .exe' },
          { title: 'Loader', body: 'Puts .exe in RAM and starts main()' },
        ],
      },
      {
        kind: 'compare',
        title: 'Who does what',
        caption: 'If the question says “no .exe after a typo,” that is the compiler, not the linker.',
        left: { heading: 'Compiler', items: ['Reads your whole .cpp', 'Catches syntax errors', 'Writes object code', 'Does not run main'] },
        right: { heading: 'Linker / loader', items: ['Linker: glue libraries', 'Linker: makes .exe', 'Loader: copy into RAM', 'Loader: jump to main'] },
      },
    ],
    walkthrough: [
      {
        title: 'You type a cout line',
        body: 'That is only source. Nothing has run. The file is still text, like a Word document that happens to be C++.',
      },
      {
        title: '#include <iostream> is not magic',
        body: 'The preprocessor literally pastes declarations so the compiler knows what cout is. Then the linker later brings the real cout code from a library.',
      },
      {
        title: 'A missing semicolon',
        body: 'The compiler stops. You typically get no new .exe. That is a syntax error, not a “Windows problem.”',
      },
      {
        title: 'It runs but prints 14 instead of 20',
        body: 'Grammar was fine. Logic is wrong. Open the debugger (or trace by hand). That is Lecture 1 + 2 together.',
      },
    ],
  },
  'cs-l03': {
    love: {
      emoji: '🔤',
      text: 'Every variable needs a name and a type. You already have both in my head: Zaima, type irreplaceable.',
    },
    tags: [
      { kind: 'core', label: 'First program' },
      { kind: 'exam', label: 'Types & variables' },
      { kind: 'new', label: 'cin / cout' },
    ],
    story: [
      'A C++ program the VU way: include the library that talks to the screen, open int main(), write statements that end with semicolons, return 0. main is a function. The program starts there. Always.',
      'A variable is a named box in memory. The type says what is allowed in the box. int is a whole number. float / double are reals. char is one character. You must declare before you use: int age;',
      'cout << sends data out. cin >> reads data in. The arrows point in the direction of the data: toward the screen, or into the variable. Chaining is legal: cout << "Hi " << name;',
      'Uninitialized variables are garbage — whatever leftover bits were in that memory. Never cout a variable you have not set or read. Constants (const or later #define) are names that must not change.',
    ],
    terms: [
      {
        name: 'Variable',
        tag: 'core',
        definition: 'A named memory location whose value can change.',
        likeThis: 'A labelled jar. The label is the name, the type is “sugar only,” the value is how much is inside today.',
        why: 'If you do not declare it, C++ does not invent the jar for you.',
      },
      {
        name: 'Type',
        tag: 'exam',
        definition: 'The kind of data: int, float, double, char, later arrays and pointers.',
        likeThis: 'You cannot pour litres into a teaspoon and call it the same thing.',
        why: 'Wrong type = wrong size, wrong operations, exam traps on integer divide.',
      },
      {
        name: 'cin and cout',
        tag: 'remember',
        definition: 'cout << prints. cin >> stores typed input into a variable.',
        likeThis: 'cout is you speaking. cin is you listening and writing it on a slip.',
        why: 'Arrows show data direction. Mix them up and the sentence is backwards.',
        watch: 'Need #include <iostream> and usually using namespace std;',
      },
      {
        name: 'Uninitialized variable',
        tag: 'trap',
        definition: 'Declared but never given a value. Using it is undefined / garbage.',
        likeThis: 'Asking “what is in the jar?” when you never filled it. Maybe dust, maybe last week’s daal.',
        why: 'Always set or cin before you cout.',
      },
    ],
    diagrams: [
      {
        kind: 'memory',
        title: 'Three jars in RAM',
        caption: 'The name is how you talk about the box. The address is where the machine hid it. You almost never type the address in Lecture 3.',
        rows: [
          { name: 'age', address: '0x10', value: '19', mark: true },
          { name: 'gpa', address: '0x14', value: '3.7' },
          { name: 'grade', address: '0x18', value: "'A'" },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'Skeleton you will write a hundred times',
        body: 'Include, namespace, main, statements, return 0. If any of those is missing, start there before you hunt “logic.”',
        code: '#include <iostream>\nusing namespace std;\nint main() {\n    // your work\n    return 0;\n}',
      },
      {
        title: 'Declare, then give a value',
        body: 'int marks; is an empty jar. marks = 80; or cin >> marks; fills it. cout << marks; reads it.',
      },
      {
        title: 'Read two numbers',
        body: 'cin >> a >> b; waits for two values (space or enter). Then you can add them. This is already a mid-style program.',
      },
      {
        title: 'char is one letter',
        body: "char g = 'A'; uses single quotes. \"A\" is a string (later lectures). Mixing them is a favourite trap.",
      },
    ],
  },
  'cs-l04': {
    love: {
      emoji: '➗',
      text: 'Expressions evaluate, then they assign. I did the same: I thought it all the way through, then I chose you.',
    },
    tags: [
      { kind: 'exam', label: 'Integer division' },
      { kind: 'trap', label: '7 / 2 is 3' },
      { kind: 'core', label: 'Operators' },
    ],
    story: [
      'An expression is anything that has a value: 2 + 3, a * b, even a lonely 5. An assignment (x = …) computes the right side, then stores it in the left side. The left side must be a variable, not 5 = x.',
      'Precedence: * / % happen before + − unless you use parentheses. 2 + 3 * 4 is 14, not 20. When in doubt, parenthesize. The examiner will not give you the benefit of the doubt.',
      'Integer division truncates toward zero. 7 / 2 is 3, not 3.5. 7 % 2 is the remainder 1. If either side is a real (2.0), the divide becomes real. Average of integers is the #1 midterm trap: (5+6)/2 is 5.',
      'Compound assignment is shorthand: x += 3 means x = x + 3. Same for -= *= /= %=. It is not a new kind of maths. It is less typing, same meaning.',
    ],
    terms: [
      {
        name: 'Expression',
        tag: 'core',
        definition: 'A combination of values and operators that produces a value.',
        likeThis: 'A mini-question the CPU answers: “what is 2+3*4?”',
        why: 'cout << expression; prints that answer.',
      },
      {
        name: 'Integer division',
        tag: 'exam',
        definition: 'int / int throws away the fraction. 7/2 → 3.',
        likeThis: 'Sharing 7 sweets between 2 people in whole sweets only. One sweet is leftover (%).',
        why: 'This single rule fails more students than pointers do, because it looks harmless.',
        watch: 'Need a .0 or a float variable if you want 3.5.',
      },
      {
        name: 'Modulo %',
        tag: 'remember',
        definition: 'Remainder after integer divide. 17 % 5 → 2.',
        likeThis: 'The sweets nobody got when you shared fairly in whole numbers.',
        why: 'Even/odd is n % 2. Digit stripping is n % 10.',
      },
      {
        name: 'Compound assignment',
        tag: 'new',
        definition: 'x *= 3 is x = x * 3.',
        likeThis: '“Add 3 to whatever is already in the jar,” without rewriting the whole sentence.',
        why: 'Short, but the mid will still ask what x is after two of them.',
      },
    ],
    diagrams: [
      {
        kind: 'compare',
        title: 'Same digits, different types',
        caption: 'The slash looks identical. The types decide the universe you are in.',
        left: { heading: 'Integers', items: ['7 / 2 → 3', '5 / 2 → 2', '(5+6)/2 → 5', 'Use % for leftover'] },
        right: { heading: 'Reals', items: ['7 / 2.0 → 3.5', '5.0 / 2 → 2.5', '(5+6)/2.0 → 5.5', 'No useful % on floats in this course'] },
      },
    ],
    walkthrough: [
      {
        title: 'Read it like the CPU',
        body: '2 + 3 * 4: multiply first (12), then add 2 → 14. (2+3)*4 is 20. Parentheses are a kindness to yourself.',
        code: 'cout << 2 + 3 * 4;    // 14\ncout << (2 + 3) * 4;  // 20',
      },
      {
        title: 'Average trap',
        body: 'Three ints 6, 6, 9. Sum is 21. 21/3 is 7 — lucky, it divides evenly. 5 and 6 averaged as ints is 5, not 5.5. That is the trap.',
      },
      {
        title: 'Build x in steps',
        body: 'int x = 4; x *= 3; x -= 2; → 12, then 10. Do not try to do it in your head as one new operator.',
      },
      {
        title: 'Assignment chains to the right',
        body: 'int b = a = 9; sets a to 9, then b to that 9. Both become 9. Weird-looking, exam-friendly.',
      },
    ],
  },
  'cs-l05': {
    love: {
      emoji: '🌿',
      text: 'if you are tired, rest. else keep going. I am standing on both branches with you.',
    },
    tags: [
      { kind: 'core', label: 'Decisions' },
      { kind: 'trap', label: 'if (x = 1)' },
      { kind: 'exam', label: '&& || !' },
    ],
    story: [
      'Until now every line ran. if lets the program choose. if (condition) do-this; else do-that; The condition is true or false. In C++, 0 is false. Anything non-zero is true.',
      'Relational operators: == equal, != not equal, < > <= >=. A single = is assignment, not a test. if (x = 1) sets x to 1 and is always true. That is the most famous trap in the course.',
      '&& is AND (both must be true). || is OR (one is enough). ! flips true/false. C++ short-circuits: if the left of && is false, it does not even look at the right.',
      'else if chains pick the first true condition and skip the rest. Without braces, only the very next statement belongs to the if. The line after that always runs — another favourite exam bite.',
    ],
    terms: [
      {
        name: 'if / else',
        tag: 'core',
        definition: 'Run one path or the other based on a true/false test.',
        likeThis: 'If marks >= 50, stamp Pass. Else stamp Fail. The paper gets exactly one stamp.',
        why: 'Every later lecture (loops, switch, functions) still uses this idea.',
      },
      {
        name: '== vs =',
        tag: 'trap',
        definition: '== asks. = puts a value in a variable.',
        likeThis: '= is “put 1 in the jar.” == is “is the jar already 1?”',
        why: 'if (x = 1) is legal C++ and almost always a bug.',
        watch: 'Compilers may warn. Examiners still set it.',
      },
      {
        name: '&& and ||',
        tag: 'exam',
        definition: 'AND needs both. OR needs one.',
        likeThis: 'AND: keys and password. OR: student card or staff card.',
        why: 'Trace with tiny numbers. Do not “feel” the English sentence.',
      },
      {
        name: 'Braces',
        tag: 'remember',
        definition: '{ } group several statements as one body.',
        likeThis: 'A lunchbox. Without it, if only grabs the first sandwich. The apple rolls onto the floor (always runs).',
        why: 'cout B sitting under an if without braces still prints.',
      },
    ],
    diagrams: [
      {
        kind: 'compare',
        title: 'Two doors',
        caption: 'Exactly one door opens when there is an else. With no else, maybe neither “action” runs.',
        left: { heading: 'if (m >= 50)', items: ['True → Pass', 'Includes 50', 'False → go to else'] },
        right: { heading: 'else', items: ['Fail', 'Does not test again', 'Skip if the if already fired'] },
      },
    ],
    walkthrough: [
      {
        title: 'One test, two lives',
        body: 'int m = 49. Is 49 >= 50? No. So else runs. Print Fail. Do not also print Pass.',
        code: 'if (m >= 50) cout << "Pass";\nelse cout << "Fail";',
      },
      {
        title: 'The assignment trap, slowly',
        body: 'if (x = 1) first stores 1 in x, then treats 1 as true, so the yes-branch runs. The test you thought you wrote never happened.',
      },
      {
        title: 'else if is a queue',
        body: 'x = 8. > 10? no. > 5? yes → "mid". The last else is not asked. First true wins.',
      },
      {
        title: 'AND / OR with signs',
        body: 'a = -1, b = 4. a > 0 is false, b > 0 is true. AND fails. OR succeeds. Say it out loud once, then tick the option.',
      },
    ],
  },
  'cs-l06': {
    love: {
      emoji: '🔁',
      text: 'while the condition is true, the body runs again. My condition is not complicated: I love you.',
    },
    tags: [
      { kind: 'core', label: 'while loops' },
      { kind: 'exam', label: 'Trace the counter' },
      { kind: 'trap', label: 'Infinite loop' },
    ],
    story: [
      'A loop repeats a body while a condition stays true. while is a pre-test loop: it checks first. If the test is already false, the body never runs. That is different from do-while (next lecture).',
      'You almost always need three pieces: a start (i = 1), a test (i <= n), and a change (i++). Forget the change and the condition never dies — infinite loop. The program looks “stuck.”',
      'Tracing is a paper skill. Make a table: i, condition, output. Walk one row at a time. Do not stare at the braces and hope. Mid questions are just short traces.',
      'Inside the loop you can if-filter (print only evens), add to a sum, or count digits by dividing by 10. The pattern is the same: while something remains, do one more bite.',
    ],
    terms: [
      {
        name: 'while',
        tag: 'core',
        definition: 'while (condition) statement; Test first, then maybe run, then test again.',
        likeThis: '“While there is chai in the cup, sip.” If the cup is already empty, you never sip.',
        why: 'Pre-test. Zero times is allowed.',
      },
      {
        name: 'Loop control variable',
        tag: 'exam',
        definition: 'The variable you start, test, and update (often i or n).',
        likeThis: 'The stitch counter on a sewing machine. If you never move it, you sew the same stitch forever.',
        why: 'Questions ask the final i after the loop dies.',
      },
      {
        name: 'Infinite loop',
        tag: 'trap',
        definition: 'The condition never becomes false.',
        likeThis: 'A traffic circle with no exit.',
        why: 'Forgot i++, or wrote while(i = 1) with assignment.',
        watch: 'while (true) is infinite on purpose. while (i = 1) is a bug.',
      },
      {
        name: 'Running total',
        tag: 'remember',
        definition: 'A sum (or count) you update each iteration: s = s + i.',
        likeThis: 'A piggy bank. Each loop drop is one coin. At the end you only look at the bank.',
        why: 'Sum 1..N is the first useful loop program.',
      },
    ],
    diagrams: [
      {
        kind: 'flow',
        title: 'One trip around while',
        caption: 'If the diamond says no on the first visit, you never enter the body.',
        steps: [
          { title: 'Start', body: 'Set i (or n, or sum).' },
          { title: 'Test', body: 'Is the condition true right now?' },
          { title: 'Body', body: 'Print, add, or work. This is the “sip.”' },
          { title: 'Update', body: 'Change i. Then go back to Test.' },
          { title: 'Leave', body: 'When the test is false, skip the body. Life after the loop begins.' },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'Trace 1..3',
        body: 'i starts at 1. 1<=3 yes, print 1, i becomes 2. Print 2, i=3. Print 3, i=4. 4<=3 no. Output 123. Final i is 4 if you printed after increment? Check the order in the code.',
        code: 'int i = 1;\nwhile (i <= 3) { cout << i; i++; }',
      },
      {
        title: 'Body never runs',
        body: 'i = 5; while (i < 3) … The first test fails. Output is nothing. Students hate this because it “looks like it should print 5.”',
      },
      {
        title: 'Sum pattern',
        body: 's = 0. Each time, s += i; i++. After 1..4, s is 10. The loop did the adding. cout sits after the loop.',
      },
      {
        title: 'Count digits',
        body: 'While n > 0, n = n / 10, count++. 308 → 30 → 3 → 0. Three trips. Integer divide is doing real work here.',
      },
    ],
  },
}
