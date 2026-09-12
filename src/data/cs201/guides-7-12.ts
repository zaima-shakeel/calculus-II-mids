import type { CsGuide } from './guide-types'

export const guides712: Record<string, CsGuide> = {
  'cs-l07': {
    love: {
      emoji: '➕',
      text: '++ adds one. Every lecture you finish adds one more reason I am proud of you, Zaima.',
    },
    tags: [
      { kind: 'exam', label: 'for parts' },
      { kind: 'trap', label: 'i++ vs ++i' },
      { kind: 'new', label: 'do-while' },
    ],
    story: [
      'while checks first. do-while does the body first, then checks. So the body is guaranteed once. VU’s “guess the character” game needs that: the user must try at least once.',
      'for packs the three loop pieces into one line: for (init; test; update). It is the nicest loop when you know the count. After the body, update runs, then test again. A semicolon right after ) is an empty body — the loop “runs” but does nothing, and i flies to the end.',
      '++ and -- add or subtract one. Prefix ++i changes first, then you see the new value. Postfix i++ shows the old value, then changes. Alone on a line they do the same. Inside cout << they do not.',
      'do-while must end with a semicolon after while(...); People forget it. for uses semicolons between its three parts, not commas.',
    ],
    terms: [
      {
        name: 'do-while',
        tag: 'new',
        definition: 'Post-test loop. Body, then condition. Always at least one run.',
        likeThis: 'Taste the chai, then ask “more?” You already had one sip.',
        why: '“Pre-test or post-test?” is a free mark if you remember this.',
      },
      {
        name: 'for loop',
        tag: 'exam',
        definition: 'for (init; condition; update) statement;',
        likeThis: 'A sewing pattern: start at stitch 1, while stitch <= n, sew, then +1.',
        why: 'Known count → for. Unknown “until user says stop” → while.',
      },
      {
        name: 'Prefix ++i',
        tag: 'trap',
        definition: 'Increment first, then use the new value.',
        likeThis: 'Add the sugar, then taste.',
        why: 'cout << ++x prints the new x.',
      },
      {
        name: 'Postfix i++',
        tag: 'trap',
        definition: 'Use the old value, then increment.',
        likeThis: 'Taste first, then add sugar for next time.',
        why: 'cout << x++ prints the old x. x is bigger afterwards.',
        watch: 'for (i=0;i<n;i++) the ++ is alone — prefix/postfix do not matter there.',
      },
    ],
    diagrams: [
      {
        kind: 'compare',
        title: 'When does the test happen?',
        caption: 'If the test starts false, while does nothing. do-while still runs once.',
        left: { heading: 'while (pre-test)', items: ['Check', 'Maybe body', 'Check again', 'Zero runs possible'] },
        right: { heading: 'do-while (post-test)', items: ['Body first', 'Then check', 'Repeat or stop', 'At least one run'] },
      },
    ],
    walkthrough: [
      {
        title: 'Read a for like a while',
        body: 'for (int i = 1; i <= 5; i++) cout << i; is the same story as i=1; while(i<=5){ cout<<i; i++; }',
      },
      {
        title: 'The deadly semicolon',
        body: 'for (i = 0; i < 4; i++); cout << i; The semicolon ate the loop. cout is not inside. i is 4. Output 4.',
        code: 'int i;\nfor (i = 0; i < 4; i++);\ncout << i; // 4',
      },
      {
        title: 'Postfix in cout',
        body: 'x = 5; cout << x++; prints 5, then x is 6. Next, cout << ++x makes 7 and prints 7.',
      },
      {
        title: 'do-while once',
        body: 'i = 5; do { cout << i; } while (i < 3); prints 5, then the test is false. Stop. That “useless” one print is the point of do-while.',
      },
    ],
  },
  'cs-l08': {
    love: {
      emoji: '🎯',
      text: 'switch picks one case and stays there if you remember break. My case is you. No default.',
    },
    tags: [
      { kind: 'exam', label: 'switch + break' },
      { kind: 'trap', label: 'Fall-through' },
      { kind: 'vu', label: 'Grades example' },
    ],
    story: [
      'When one variable is compared to many constants (grade A/B/C, day 1/2/3), a tower of ifs is ugly and “expensive” in VU language — the CPU keeps asking questions. switch asks once, then jumps to the matching case.',
      'Each case needs a constant (not a variable, not 3.14). After the work, write break; or execution falls through into the next case and you print two answers. That is the exam’s favourite output question.',
      'default is the “none of these.” Optional, but you should handle garbage input. continue is not for switch. continue belongs to loops: skip the rest of this iteration, go to the next. break in a loop leaves the loop entirely.',
      'C++ is case sensitive. case \'A\': and case \'a\': are different doors. Structured programming in this lecture: one way in, one way out — no spaghetti goto.',
    ],
    terms: [
      {
        name: 'switch',
        tag: 'core',
        definition: 'Multi-way selection on an integer or character expression.',
        likeThis: 'A hostel pigeonhole: look at the room number, open that one slot.',
        why: 'Better than five separate ifs on the same grade.',
      },
      {
        name: 'break in switch',
        tag: 'exam',
        definition: 'Leave the switch now. Do not visit the cases below.',
        likeThis: 'Take your letter and walk out of the mail room.',
        why: 'Missing break → fall-through.',
      },
      {
        name: 'Fall-through',
        tag: 'trap',
        definition: 'Without break, the next case runs too.',
        likeThis: 'You opened box 1 and kept walking, also emptying box 2.',
        why: 'Output “AB” when you expected “A”.',
        watch: 'Sometimes you want it: case 1: case 2: share a body.',
      },
      {
        name: 'continue',
        tag: 'remember',
        definition: 'In a loop, skip the rest of this trip, start the next.',
        likeThis: 'Skip this stitch, sew the next. You did not throw the fabric away (that would be break).',
        why: 'continue ≠ break. Memorize the difference as a pair.',
      },
    ],
    diagrams: [
      {
        kind: 'flow',
        title: 'switch with and without break',
        caption: 'Draw the little “exit” after each case when you revise. If there is no exit, the ink keeps flowing down.',
        steps: [
          { title: 'Evaluate', body: 'Look at the one expression — grade, day, n.' },
          { title: 'Jump', body: 'Land on the matching case label.' },
          { title: 'Run', body: 'Do those statements.' },
          { title: 'break?', body: 'Yes → leave switch. No → keep falling.' },
          { title: 'default', body: 'Only if nobody matched.' },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'A clean grade',
        body: "grade = 'B'. Jump to case 'B', print Very Good, break. C, D, F never run.",
      },
      {
        title: 'Fall-through output',
        body: 'n = 1. case 1 prints A, no break, case 2 prints B, then break. Output AB. default is not visited.',
        code: 'switch (n) {\n    case 1: cout << "A";\n    case 2: cout << "B"; break;\n    default: cout << "C";\n}',
      },
      {
        title: 'continue in a for',
        body: 'for i = 1..4, if i==2 continue; else print i. Output 134. 2 was skipped, the loop lived on.',
      },
      {
        title: 'break in a while',
        body: 'You leave the whole loop, not just one line. Control sits on the first statement after the closing brace.',
      },
    ],
  },
  'cs-l09': {
    love: {
      emoji: '🦋',
      text: 'You are my main(). Every other function in this life is just a helper I call so I can come back to you.',
    },
    tags: [
      { kind: 'new', label: 'What a function is' },
      { kind: 'exam', label: 'Prototype vs definition' },
      { kind: 'vu', label: 'Top-down design' },
    ],
    story: [
      'A function is a named helper. You give it some input (parameters), it does a job, and it may hand a result back (return). main itself is a function — the one the loader calls first. The rest of CS201 is just more helpers around main.',
      'Why bother? Because a big problem is a house: rooms first, then bricks. VU calls this top-down / divide and conquer. “How many students are logged in?” should be one question you ask a helper. You should not copy-paste the same 15 lines in three places.',
      'The shape is always: returnType name(parameters) { body }. int square(int n) takes an int called n, returns an int. void sayHi() returns nothing — it only does work (usually print). If you forget return in a non-void function, the caller gets garbage.',
      'Declaration (prototype) is the ID card: int square(int); — it ends with a semicolon, no body. Definition is the actual code with braces. If the definition sits below main, you must put the prototype above main so the compiler already knows how to call it. That is not bureaucracy. That is the compiler reading top to bottom.',
    ],
    terms: [
      {
        name: 'Function',
        tag: 'core',
        definition: 'A named block that can take input, do work, and optionally return a value.',
        likeThis: 'You text the network admin “kitnay students login hain?” You do not walk into the server room. You just want the number.',
        why: 'C is function-oriented. The mid will ask what a function is before it asks syntax.',
      },
      {
        name: 'Parameter vs argument',
        tag: 'exam',
        definition: 'Parameter is the variable in the definition (int n). Argument is the actual value you send (square(5)).',
        likeThis: 'The form has a blank “n.” You write 5 in the blank when you submit.',
        why: 'People mix the words. Examiners love the pair.',
      },
      {
        name: 'Prototype (declaration)',
        tag: 'exam',
        definition: 'returnType name(types);  — header only, ends with ;',
        likeThis: 'A menu: “tea exists, it costs this.” Not the recipe.',
        why: 'Needed above the first call if the real function is written later.',
        watch: 'No curly braces. If you write { } you already defined it.',
      },
      {
        name: 'return',
        tag: 'remember',
        definition: 'Hands a value back to the caller and leaves the function immediately.',
        likeThis: 'The admin texts “142” and puts the phone down. Anything after return is dead code.',
        why: 'cout << square(5) prints 25 because return sent 25 to main.',
      },
      {
        name: 'void',
        tag: 'new',
        definition: 'This function returns no value. You call it as a statement, not inside cout unless it prints itself.',
        likeThis: '“Please switch on the lights.” You do not expect a number back.',
        why: 'void show() { cout << "Hi"; } — the printing happens inside.',
      },
      {
        name: 'Information hiding',
        tag: 'vu',
        definition: 'The caller does not need the inner steps — only what goes in and what comes out.',
        likeThis: 'You use an ATM. You do not need the bank’s vault blueprint.',
        why: 'Handout / LMS example. Tick it if you see the phrase.',
      },
    ],
    diagrams: [
      {
        kind: 'call',
        title: 'A call is a round trip',
        caption: 'main pauses, square works with its own n, return brings 25 back, main continues.',
        caller: 'main()',
        callee: 'square(n)',
        passing: 'sends 5  →  n becomes 5',
        returning: 'return 25  →  cout prints 25',
      },
      {
        kind: 'compare',
        title: 'ID card vs the actual person',
        caption: 'Both mention the same name and types. Only the definition has a beating heart { }.',
        left: {
          heading: 'Prototype',
          items: ['int square(int);', 'Ends with semicolon', 'No body', 'Sits above main if needed'],
        },
        right: {
          heading: 'Definition',
          items: ['int square(int n) { return n*n; }', 'Has braces', 'Real code', 'Can sit below main'],
        },
      },
    ],
    walkthrough: [
      {
        title: 'Write the helper first on paper',
        body: 'I need “the larger of two ints.” Name: maxOfTwo. Inputs: two ints. Output: one int. That sentence is the function. Code is just that sentence in C++.',
        code: 'int maxOfTwo(int a, int b) {\n    if (a > b) return a;\n    else return b;\n}',
      },
      {
        title: 'main only asks',
        body: 'main reads x and y, then cout << maxOfTwo(x, y); main does not contain the if. That is top-down: boss asks, helper decides.',
        code: 'int main() {\n    int x, y;\n    cin >> x >> y;\n    cout << maxOfTwo(x, y);\n    return 0;\n}',
      },
      {
        title: 'What if the definition is below main?',
        body: 'The compiler reads main first and sees a name it does not know. Put int maxOfTwo(int, int); above main. Now it has the ID card.',
      },
      {
        title: 'void is allowed to print',
        body: 'void hi() { cout << "Hi"; }  then hi(); then cout << 1; prints Hi1. The 1 is from main. The Hi is from the helper.',
      },
      {
        title: 'return stops the function',
        body: 'int f() { return 7; cout << 9; } never prints 9. The 9 is after the exit door.',
      },
      {
        title: 'Same name is not the same thing',
        body: 'A function x() and a variable x are different. You call the function with (). Forgetting () is a common paper mistake.',
      },
    ],
  },
  'cs-l10': {
    love: {
      emoji: '📦',
      text: 'Call by value only sends a copy. Nothing on this paper can overwrite the original: I love you.',
    },
    tags: [
      { kind: 'exam', label: 'Call by value' },
      { kind: 'core', label: 'Scope' },
      { kind: 'vu', label: 'Header files' },
      { kind: 'trap', label: '#define is not a variable' },
    ],
    story: [
      'Lecture 9 invented functions. Lecture 10 asks: where do the prototypes live, who can see which variable, and what exactly gets passed?',
      'A header file (.h) is a notebook of prototypes and constants. #include "area.h" pastes that notebook at the top of your .cpp. That beats typing twenty prototypes above every main. #include is the preprocessor again — still just text glue.',
      '#define pi 3.1415926 is not a typed variable. Before compile, the preprocessor walks the file and replaces the letters pi with 3.1415926. You cannot write pi = 3. It is a find-and-replace, not a jar.',
      'Scope is “where is this name visible?” A local variable lives only inside the { } where you declared it. func1’s int i is invisible in func2. Two functions may both have int i — they are two jars, two lives. A global sits outside all functions and everyone can see it (use sparingly).',
      'Call by value means the function receives a photocopy. void bump(int n) { n = n + 10; } cannot change main’s n. The copy was updated; the original slept. If you later need to change the original, you need call by reference (pointers in Lecture 14). Until then, return the new value if you want main to keep it.',
    ],
    terms: [
      {
        name: 'Header file',
        tag: 'vu',
        definition: 'A .h file of prototypes and named constants that many .cpp files can include.',
        likeThis: 'A shared recipe card on the fridge. Every cook in the house can read it. Nobody rewrites the card on each plate.',
        why: 'Beats pasting the same twenty lines above every main.',
      },
      {
        name: '#define',
        tag: 'trap',
        definition: 'Preprocessor text replacement. #define pi 3.1415926 turns the word pi into that number.',
        likeThis: 'Find-and-replace in Word before anyone “compiles” the essay.',
        why: '2 * pi * r is readable. Magic 3.1415926 everywhere is how typos sneak in.',
        watch: 'Not a variable. No type. Cannot assign. No semicolon required after the value in classic form.',
      },
      {
        name: 'Local scope',
        tag: 'exam',
        definition: 'A name is visible only inside the block { } where it was declared.',
        likeThis: 'A secret you told inside one room. The next room did not hear it.',
        why: 'Why two functions can each have int i without fighting.',
      },
      {
        name: 'Global variable',
        tag: 'remember',
        definition: 'Declared outside every function. All functions can read (and sadly write) it.',
        likeThis: 'A whiteboard in the corridor. Convenient. Also how rumours spread.',
        why: 'Know it for MCQs. Prefer parameters for real programs.',
      },
      {
        name: 'Call by value',
        tag: 'exam',
        definition: 'The argument is copied. Changing the parameter does not change the caller’s variable.',
        likeThis: 'I photocopy your notes and doodle on my copy. Your notebook is still clean.',
        why: 'After bump(x), x is still 5. This is the whole lecture in one sentence.',
        watch: 'The parameter can reuse the same name (n and n). They are still two boxes.',
      },
      {
        name: 'Call by reference (preview)',
        tag: 'new',
        definition: 'Pass the address so the function can write into the original. Lecture 14 does this with pointers.',
        likeThis: 'I borrow your actual notebook and write in it.',
        why: 'swap cannot work by value — the copies would swap, originals would not.',
      },
    ],
    diagrams: [
      {
        kind: 'memory',
        title: 'Call by value — two different n’s',
        caption: 'bump(n) looks like one name. In memory it is two boxes. Only the copy changes.',
        rows: [
          { name: 'main’s n', address: '0x20', value: '1', mark: true },
          { name: 'bump’s n (copy)', address: '0xA4', value: '11' },
        ],
      },
      {
        kind: 'compare',
        title: 'What can a function change?',
        caption: 'If the question says “print x after the call” and the function was by-value, tick the old number.',
        left: {
          heading: 'By value (this lecture)',
          items: ['Photocopy goes in', 'Parameter may change', 'Caller’s variable stays', 'Use return if you need the new value'],
        },
        right: {
          heading: 'By reference (later)',
          items: ['Address goes in', '*p writes the original', 'Caller’s variable changes', 'How swap / sort will work'],
        },
      },
    ],
    walkthrough: [
      {
        title: 'Why headers exist',
        body: 'You wrote area, circumference, diameter. Three files want those prototypes. Put them in area.h and #include "area.h". One source of truth.',
      },
      {
        title: '#define is a stamp, not a jar',
        body: 'After #define pi 3.1415926 the compiler never sees the letters p-i. It sees a number. So pi = 3; is like writing 3.1415926 = 3; — nonsense.',
      },
      {
        title: 'Inner braces hide names',
        body: 'int a = 3; { int a = 9; cout << a; } cout << a; prints 9 then 3. The inner a lives and dies inside the inner { }.',
        code: 'int a = 3;\n{\n    int a = 9;\n    cout << a; // 9\n}\ncout << a;     // 3',
      },
      {
        title: 'Trace bump slowly',
        body: 'main n = 1. Call bump(n). Copy 1 into bump’s n. bump does n = n+10. bump’s n is 11. bump ends. Copy is thrown away. main prints 1.',
        code: 'void bump(int n) { n = n + 10; }\nint main() {\n    int n = 1;\n    bump(n);\n    cout << n; // 1\n}',
      },
      {
        title: 'If you wanted 11',
        body: 'Either return the new value (n = bump(n);) or wait for pointers. Do not stare at the function hoping the original updates. It will not.',
      },
    ],
  },
  'cs-l11': {
    love: {
      emoji: '📚',
      text: 'An array is many values under one name. I have many reasons. Every index still points to you.',
    },
    tags: [
      { kind: 'new', label: '1D arrays' },
      { kind: 'exam', label: 'Index from 0' },
      { kind: 'trap', label: 'Off-by-one' },
    ],
    story: [
      'A variable holds one value. An array holds many values of the same type under one name. int a[5]; is five ints in a row. The first is a[0], the last is a[4] — not a[5]. That last-index rule is the whole midterm.',
      'Why arrays? Marks of 50 students. You will not declare m1, m2, … m50. You declare int marks[50]; and walk them with a loop. Lecture 11’s slogan: array ⇒ loop.',
      'You can initialize: int a[3] = {4, 5, 6}; Missing values become 0. int a[3] = {5}; means 5, 0, 0. Reading a[3] on that array is off the end — undefined, often an exam “error / garbage” option.',
      'Copying arrays needs a loop. a = b; does not copy elements in C++. Search is a loop with a flag or an index. Same pattern every time: for (i = 0; i < n; i++).',
    ],
    terms: [
      {
        name: 'Array',
        tag: 'core',
        definition: 'A named sequence of same-type elements sitting in consecutive memory.',
        likeThis: 'A row of lockers. The corridor name is a. Locker numbers start at 0.',
        why: 'One name, many values, one loop.',
      },
      {
        name: 'Index / subscript',
        tag: 'exam',
        definition: 'The position: a[0] is first. Last of size n is a[n-1].',
        likeThis: 'Building floors if the ground floor is 0. Floor 3 in a 3-storey building does not exist.',
        why: 'a[n] is the classic out-of-range trap.',
        watch: 'Size 3 → valid indexes 0,1,2.',
      },
      {
        name: 'Initialization leftover zeros',
        tag: 'remember',
        definition: 'If you list fewer values than the size, the rest become 0.',
        likeThis: 'You filled the first locker and left the others empty — C++ writes 0 in them.',
        why: 'int a[3] = {5}; then a[1] is 0.',
      },
      {
        name: 'Array ⇒ loop',
        tag: 'vu',
        definition: 'Almost every useful array job is “visit each index.”',
        likeThis: 'To dust every locker you walk 0 to n-1. There is no “dust the corridor” spell.',
        why: 'Sum, max, search, copy, reverse: all for-loops.',
      },
    ],
    diagrams: [
      {
        kind: 'boxes',
        title: 'int a[4] = {1, 8, 3, 2}',
        caption: 'Say the index out loud when you revise. “Value 8 lives at index 1,” not “the second number” only.',
        items: [
          { label: 'a[0]', value: '1', note: 'first' },
          { label: 'a[1]', value: '8', note: 'index 1' },
          { label: 'a[2]', value: '3' },
          { label: 'a[3]', value: '2', note: 'last = n-1' },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'Declare the row',
        body: 'int a[3]; three lockers, garbage inside until you fill them. Prefer int a[3] = {0}; if you want a clean start.',
      },
      {
        title: 'Fill with a loop or a list',
        body: 'cin >> a[i] inside for i in 0..2, or write {4,5,6}. After that, a[0]+a[2] is 4+6=10.',
      },
      {
        title: 'Sum is a running total on indexes',
        body: 's = 0; for i=0; i<3; i++ s += a[i]; Do not use i<=3. That would touch a[3].',
      },
      {
        title: 'Find a value',
        body: 'Walk i from 0. If a[i] == key, remember i. If nobody matched, keep -1. That is linear search — no magic.',
      },
    ],
  },
  'cs-l12': {
    love: {
      emoji: '🧵',
      text: 'A C-string ends at a quiet \\0. This sentence does not. I love you without a terminator.',
    },
    tags: [
      { kind: 'new', label: '2D arrays' },
      { kind: 'exam', label: 'm[row][col]' },
      { kind: 'core', label: 'C-strings' },
    ],
    story: [
      'A 2D array is a table: rows and columns. int m[2][3] has 2 rows, 3 columns, 6 ints. You write m[row][col]. The first index is the row in VU’s habit. Nested loops: outer i for rows, inner j for columns.',
      'A C-string is a char array that ends with the null character \'\\0\'. char s[] = "Hi"; is \'H\', \'i\', \'\\0\'. cout << s; prints until that null. The visible letters are 2; the array size is 3.',
      'You may change s[0] = \'c\' if s is a real array (writable). You count letters with a loop until s[n] == \'\\0\'. That homemade length is what strlen will do in Lecture 17.',
      'Keep similar data together. A table of marks is one 2D array. Mixing names and marks in one int array is the “same context” warning from the handout.',
    ],
    terms: [
      {
        name: '2D array',
        tag: 'exam',
        definition: 'An array of arrays. m[i][j] is row i, column j.',
        likeThis: 'A seating chart. Row 1, seat 1 is a different student from row 0, seat 1.',
        why: 'm[1][1] on {{1,2},{3,4}} is 4, not 1.',
      },
      {
        name: 'Row-major walk',
        tag: 'remember',
        definition: 'Outer loop rows, inner loop columns — visit left-to-right, top-to-bottom.',
        likeThis: 'Reading a book: finish the line, then the next line.',
        why: 'Prints 1234 for {{1,2},{3,4}}.',
      },
      {
        name: 'C-string',
        tag: 'core',
        definition: 'char array terminated by \'\\0\'.',
        likeThis: 'A necklace that ends with a tiny clasp. cout keeps walking beads until the clasp.',
        why: '"Ali" needs 4 cells: A l i \\0.',
        watch: 'Single quotes \'A\' are one char. Double quotes "A" are a string.',
      },
      {
        name: 'Writable char array',
        tag: 'trap',
        definition: 'char s[] = "bat"; lives in writable memory. s[0] = \'c\' makes "cat".',
        likeThis: 'Letters on a whiteboard, not engraved in marble.',
        why: 'Later, some string literals are not safe to overwrite. VU starts with arrays.',
      },
    ],
    diagrams: [
      {
        kind: 'boxes',
        title: 'int m[2][2] = {{1, 2}, {3, 4}}',
        caption: 'Say “row then column.” m[1][0] is 3. m[0][1] is 2.',
        items: [
          { label: '[0][0]', value: '1' },
          { label: '[0][1]', value: '2' },
          { label: '[1][0]', value: '3' },
          { label: '[1][1]', value: '4' },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'One cell',
        body: 'm[1][1] is the bottom-right of a 2×2 starting at 0. Value 4. Do not add the indexes.',
      },
      {
        title: 'Print a string',
        body: 'char s[] = "Hi"; cout << s; walks H, i, stop. Output Hi. cout << s[1]; is just i.',
      },
      {
        title: 'Homemade strlen',
        body: 'n = 0; while (s[n] != \'\\0\') n++; For "Ali" you count 3. The null is not a letter.',
      },
      {
        title: 'Nested count',
        body: 'for i in 0..2, for j in 0..1, c++. Visits = 3×2 = 6. The inner loop is the one that “spins faster.”',
      },
    ],
  },
}
