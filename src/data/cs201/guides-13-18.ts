import type { CsGuide } from './guide-types'

export const guides1318: Record<string, CsGuide> = {
  'cs-l13': {
    love: {
      emoji: '🧶',
      text: 'Nested loops look tangled until you walk one row at a time. I will walk every row of this midterm with you.',
    },
    tags: [
      { kind: 'exam', label: 'Nested loops' },
      { kind: 'vu', label: 'Last row first' },
      { kind: 'trap', label: 'i vs j' },
    ],
    story: [
      'Lecture 13 is not a new kind of array. It is “now actually process the table.” Fill it, then walk it again to print or add. Two passes are normal: input pass, process pass.',
      'Nested loops: the outer index is usually the row, the inner is the column. The inner body runs (rows × columns) times. For 3×3 that is 9 visits. If you swap i and j by accident, you transpose the meaning and the paper looks “almost right.”',
      'Reverse-row output: start i at the last valid index (for 3×3 that is 2, not 3) and decrement. Columns still go 0,1,2. Last row first is a handout exercise. Off-by-one here prints garbage or skips a row.',
      'Same-context rule again: heights in one array, ages in another. A 2D array is still “similar data.” Design on paper: what is the index pattern? Then code.',
    ],
    terms: [
      {
        name: 'Nested loop',
        tag: 'exam',
        definition: 'A loop inside a loop. Every outer value, the inner loop restarts.',
        likeThis: 'For each floor, walk every room. You do not walk rooms once for the whole building.',
        why: 'Inner body runs outerCount × innerCount times.',
      },
      {
        name: 'Last index',
        tag: 'trap',
        definition: 'For n rows, last row is n-1.',
        likeThis: 'Three steps: 0, 1, 2. There is no step 3.',
        why: 'for (i = 3; …) on a [3][3] is already off the array.',
      },
      {
        name: 'Row-major process',
        tag: 'remember',
        definition: 'Finish one entire row, then the next. Or reverse the row order on purpose.',
        likeThis: 'Read a ledger bottom-up if the boss asks for last month first.',
        why: 'The “print last row first” question is pattern, not genius.',
      },
      {
        name: 'Two-pass idea',
        tag: 'vu',
        definition: 'Fill the structure, then traverse again to compute.',
        likeThis: 'First set the table. Then add the columns. Do not add while the waiter is still seating people.',
        why: 'Cleaner traces. Fewer “I used a half-filled cell” bugs.',
      },
    ],
    diagrams: [
      {
        kind: 'flow',
        title: 'One 2×2 visit order (row-major)',
        caption: 'If the question reverses rows, only the outer counter walks backward. Inner j still goes left to right.',
        steps: [
          { title: 'i=0 j=0', body: 'Top-left' },
          { title: 'i=0 j=1', body: 'Top-right' },
          { title: 'i=1 j=0', body: 'Bottom-left' },
          { title: 'i=1 j=1', body: 'Bottom-right' },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'Count the visits',
        body: '2 rows, 2 cols → 4 prints. 3×2 → 6. If your mental count is 5, you dropped a cell.',
      },
      {
        title: 'Reverse rows only',
        body: 'm = {{1,2},{3,4}}. for i=1..0, print m[i][0] → 3 then 1 → 31. You did not reverse columns.',
      },
      {
        title: 'Row sums',
        body: 'For each i, add m[i][0] + m[i][1]. Two numbers. Space between. That is already a coding task in this lecture.',
      },
      {
        title: 'Off-by-one in the inner loop',
        body: 'j <= 2 on a width of 2 visits j=2, which is out of range. Prefer j < columns. Always.',
      },
    ],
  },
  'cs-l14': {
    love: {
      emoji: '🕊️',
      text: 'If a pointer can find an address, I can find my way back to you. Every time.',
    },
    tags: [
      { kind: 'new', label: 'Pointers' },
      { kind: 'exam', label: '& and *' },
      { kind: 'vu', label: 'swap / reference' },
    ],
    story: [
      'Until now a variable was a box with a value. A pointer is a box that stores another box’s address — the house number, not the family inside. int *p; says “p will hold the address of an int.”',
      '&x is “where does x live?” *p is “go to the address in p and open that box.” They are inverses when you use them cleanly: p = &x; then *p is x’s value. *p = 20 writes into x.',
      'This is how C++ does call by reference in CS201. void swap(int *a, int *b) receives two addresses. It writes through *a and *b, so main’s actual variables change. By-value swap can only swap copies — useless.',
      'Never dereference a pointer you have not pointed. That wild pointer is a random house number. Also: int* p, q; makes p a pointer and q an int. * binds to the name, not to the word int. Write int *p, *q; if you want two pointers.',
    ],
    terms: [
      {
        name: 'Pointer',
        tag: 'core',
        definition: 'A variable that stores the memory address of another object.',
        likeThis: 'A slip of paper with a house address. Not the house. Not the people. Just “12-B Gulberg.”',
        why: 'Once you have the address, you can visit and change what lives there.',
      },
      {
        name: '&  address-of',
        tag: 'exam',
        definition: '&x is the address of x.',
        likeThis: '“Where does Zaima live?” — you answer with the address, not with Zaima.',
        why: 'p = &x; is how you point.',
      },
      {
        name: '*  dereference',
        tag: 'exam',
        definition: '*p is the object sitting at the address stored in p.',
        likeThis: 'Take the slip, walk to 12-B, knock, talk to whoever lives there.',
        why: '*p = 9; changes x if p points at x.',
        watch: 'p and *p are different. p is the address. *p is the value.',
      },
      {
        name: 'Call by reference via pointer',
        tag: 'vu',
        definition: 'Pass &x so the function can write into x.',
        likeThis: 'I do not photocopy your notebook. I ask for the desk it is sitting on and write there.',
        why: 'swap, bubble sort in the handout.',
      },
      {
        name: 'Wild pointer',
        tag: 'trap',
        definition: 'A pointer with no valid address. *p is undefined / dangerous.',
        likeThis: 'A random house number from a dream. Do not knock.',
        why: 'Always p = &something (or later new, which this mid barely needs).',
      },
    ],
    diagrams: [
      {
        kind: 'pointer',
        title: 'p points at x',
        caption: 'The arrow is the address. *p and x are the same living value.',
        boxName: 'x',
        boxValue: '10',
        boxAddr: '0x64',
        pointerName: 'p',
      },
      {
        kind: 'memory',
        title: 'After *p = 20',
        caption: 'Nobody assigned x = 20 in main. The write travelled through the pointer.',
        rows: [
          { name: 'x', address: '0x64', value: '20', mark: true },
          { name: 'p', address: '0x80', value: '0x64' },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'Declare the slip',
        body: 'int *p;  p can remember an int’s address. It does not have a safe address yet.',
      },
      {
        title: 'Point it',
        body: 'int x = 10; p = &x;  Now p holds 0x64 (or whatever). cout << *p prints 10.',
        code: 'int x = 10;\nint *p = &x;\ncout << *p; // 10',
      },
      {
        title: 'Write through it',
        body: '*p = 20;  You knocked on x’s door and changed the furniture. cout << x is 20.',
      },
      {
        title: 'Swap needs two addresses',
        body: 'swap(&a, &b) gives the function both house numbers. It uses a temp, writes *a and *b. The originals trade values.',
        code: 'void swap(int *a, int *b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}',
      },
      {
        title: 'Two names, one house',
        body: 'int *q = p;  q has a copy of the address, not a copy of x. *q = 8 still changes x.',
      },
    ],
  },
  'cs-l15': {
    love: {
      emoji: '📍',
      text: 'The array name is already an address. You do not have to search for me. I am already here.',
    },
    tags: [
      { kind: 'exam', label: 'a[i] == *(a+i)' },
      { kind: 'core', label: 'Pointer arithmetic' },
      { kind: 'vu', label: 'Walk a string' },
    ],
    story: [
      'An array’s name, used in an expression, becomes the address of the first element. So int *p = a; is legal. p and a both know where locker 0 lives. a[i] is exactly *(a + i). That identity is the lecture.',
      'Pointer arithmetic moves in elements, not in “+1 byte” in your head. p++ on an int* walks to the next int. On a char* it walks one character. That is why strings are so happy with pointers.',
      'You can walk a C-string with char *p = s; while (*p) { … p++; }. *p is the current letter. When *p is 0 (the null), the loop dies. You just wrote a homemade strlen.',
      'p[1] is allowed if p points into an array — it is *(p+1). Changing p[1] changes a[1]. Same memory, two spellings.',
    ],
    terms: [
      {
        name: 'Array name as address',
        tag: 'exam',
        definition: 'In most expressions, a means &a[0].',
        likeThis: 'The corridor’s name is enough to find locker 0. You do not need a separate map.',
        why: 'int *p = a; no ampersand needed (a is already an address).',
        watch: '&a is “address of the whole array” — a slightly different type. VU mostly wants &a[0] thinking.',
      },
      {
        name: '*(a + i)',
        tag: 'exam',
        definition: 'The same cell as a[i].',
        likeThis: '“Start at locker 0, walk i doors.”',
        why: 'If this identity is in your bones, pointer MCQs become translation, not fear.',
      },
      {
        name: 'p++',
        tag: 'remember',
        definition: 'Move the pointer to the next element of its type.',
        likeThis: 'Take one step along the lockers. The step size is the size of one item.',
        why: 'After p = a; p++; *p is a[1].',
      },
      {
        name: 'Walk until null',
        tag: 'vu',
        definition: 'while (*p) { … p++; } visits every character of a C-string.',
        likeThis: 'Keep reading beads until the clasp.',
        why: 'This is Lecture 12’s length loop, rewritten with a moving finger.',
      },
    ],
    diagrams: [
      {
        kind: 'boxes',
        title: 'a and p look at the same row',
        caption: 'p++ moves the finger. a still names the whole row. a[1] and p[1] can be the same cell if p == a.',
        items: [
          { label: 'a[0] *p', value: '8', note: 'start' },
          { label: 'a[1]', value: '9' },
          { label: 'a[2] *(a+2)', value: '10' },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'Set the finger',
        body: 'int a[3] = {8,9,10}; int *p = a;  *p is 8. *(p+2) is 10. a[2] is 10. Three spellings, one locker.',
      },
      {
        title: 'Step',
        body: 'p++; now *p is 9. You did not change the array. You changed which locker the slip points to.',
      },
      {
        title: 'Write through an alias',
        body: 'p[1] = 0 when p == a writes a[1]. Same paint, different brush name.',
      },
      {
        title: 'String walk',
        body: 'char s[] = "OK"; char *p = s; cout << *p << *(p+1); prints OK. The null sits after K and is not printed.',
      },
    ],
  },
  'cs-l16': {
    love: {
      emoji: '⭐',
      text: 'A pointer to a pointer is still just a path home. Two stars. Same girl.',
    },
    tags: [
      { kind: 'exam', label: '**q' },
      { kind: 'vu', label: 'argv idea' },
      { kind: 'trap', label: 'Writable vs literal' },
    ],
    story: [
      'If a pointer stores an address, a pointer to a pointer stores the address of a pointer. int **q;  q points at p, p points at x. **q is x. This looks scary and is just two knocks: first find p, then find x.',
      'VU uses this to hint at command-line arguments: main can be written main(int argc, char *argv[]). argv is an array of C-strings (or a pointer to pointer to char). argv[0] is usually the program name. argc is how many tokens arrived. You will not run real argv in the browser lab, but the picture matters for MCQs.',
      'An array of pointers to char is a list of words: const char *w[] = {"on","off"};  w[1] is the string "off". w[1][1] is \'f\'. Two indexes: which word, which letter.',
      'char name[] = "Ali" is a writable copy. name[0] = \'a\' is fine. A pointer aimed at a string literal may not be writable. Exam: know which one you may paint over.',
    ],
    terms: [
      {
        name: 'Pointer to pointer',
        tag: 'exam',
        definition: 'int **q stores the address of an int*. **q is the original int.',
        likeThis: 'A note that says “the address slip is in the drawer.” Two hops: drawer, then house.',
        why: '**q = 4 writes x if q → p → x.',
      },
      {
        name: 'argc / argv (idea)',
        tag: 'vu',
        definition: 'argc = how many command-line tokens. argv[i] = that token as a C-string. argv[0] is the program name.',
        likeThis: 'The waiter repeats your whole order, starting with the restaurant’s name.',
        why: 'argc - 1 is how many user words after the program name.',
      },
      {
        name: 'Array of C-strings',
        tag: 'remember',
        definition: 'const char *w[] = {"on","off"}; each element points at a word.',
        likeThis: 'A contents page: line 0 “on”, line 1 “off.” Then you can still open letter 1 of line 1.',
        why: 'w[1][1] on "off" is f.',
      },
      {
        name: 'Writable copy',
        tag: 'trap',
        definition: 'A char array you own can change letters. A literal may be read-only.',
        likeThis: 'Homework photocopy vs the printed textbook.',
        why: 'char name[] = "Ali"; name[0] = \'a\'; → ali.',
      },
    ],
    diagrams: [
      {
        kind: 'memory',
        title: 'x ← p ← q',
        caption: 'Read stars from the variable: q is **, so two hops to the int.',
        rows: [
          { name: 'x', address: '0x10', value: '5', mark: true },
          { name: 'p', address: '0x20', value: '0x10' },
          { name: 'q', address: '0x30', value: '0x20' },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'Build the chain',
        body: 'int x = 5; int *p = &x; int **q = &p;  Now **q is 5. *q is the pointer p. q is the address of p.',
      },
      {
        title: 'Write through two stars',
        body: '**q = 4;  x becomes 4. You never typed x on that line. The path found it.',
      },
      {
        title: 'Words then letters',
        body: 'const char *w[] = {"on","off"}; w[1] prints off. w[1][1] is the second letter of off: f.',
      },
      {
        title: 'argc picture',
        body: 'If someone launched app one two, argc is 3. User arguments are 2. argv[0][0] is the first letter of the program name.',
      },
    ],
  },
  'cs-l17': {
    love: {
      emoji: '🔤',
      text: 'strcmp says whether two words match. Ours already do: Zaima, Marsad.',
    },
    tags: [
      { kind: 'exam', label: 'strlen strcmp strcpy' },
      { kind: 'vu', label: '<cstring>' },
      { kind: 'new', label: 'ctype helpers' },
    ],
    story: [
      'You already walked strings by hand. Library functions do the same walks, faster to write. Include <cstring> for strlen, strcmp, strcpy, strcat. Include <cctype> for isdigit, isalpha, tolower.',
      'strlen(s) counts letters before \\0 — not including the null. "UET" is 3. Empty string is 0. strcmp(a,b) returns 0 when equal (so if (strcmp(a,b)==0) they match). Negative / positive means dictionary order, not “true/false” in the English sense.',
      'strcpy(dest, src) copies including the null. dest must be big enough. strcat(dest, src) glues src onto the end of dest. dest must already be a valid string and have spare room. These two are how you build "CS201" from "CS" and "201".',
      'isdigit(\'7\') is true. isalpha(\'7\') is false. tolower(\'B\') is \'b\'. On the paper they often want 1 or 0, so write (isdigit(ch) ? 1 : 0) if you cout the test.',
    ],
    terms: [
      {
        name: 'strlen',
        tag: 'exam',
        definition: 'Number of characters before \'\\0\'.',
        likeThis: 'Count beads, stop at the clasp. Do not count the clasp.',
        why: 'strlen("UET") is 3, not 4.',
      },
      {
        name: 'strcmp',
        tag: 'exam',
        definition: '0 if equal. <0 if first comes before second. >0 otherwise.',
        likeThis: 'A dictionary referee, not a yes/no friend. 0 means “same word.”',
        why: 'if (strcmp(a,b)==0) print Equal.',
        watch: 'Do not if (strcmp(a,b)) expecting true-when-equal. Non-zero is “different.”',
      },
      {
        name: 'strcpy / strcat',
        tag: 'core',
        definition: 'strcpy copies. strcat appends. Both need a big enough destination.',
        likeThis: 'strcpy: new page, copy the poem. strcat: add a stanza at the end of the same page.',
        why: 'Overflowing dest is undefined — exam says “buffer must be large.”',
      },
      {
        name: 'isdigit / isalpha / tolower',
        tag: 'remember',
        definition: 'Character tests and case change from <cctype>.',
        likeThis: 'A stamp: “this is a digit,” “this is a letter,” “make this small.”',
        why: 'Count digits in cs201 → 3.',
      },
    ],
    diagrams: [
      {
        kind: 'compare',
        title: 'Which header?',
        caption: 'Wrong header is a compile error in the lab and a cheap MCQ on paper.',
        left: { heading: '<cstring>', items: ['strlen', 'strcmp', 'strcpy', 'strcat'] },
        right: { heading: '<cctype>', items: ['isdigit', 'isalpha', 'tolower', 'toupper'] },
      },
    ],
    walkthrough: [
      {
        title: 'Length',
        body: 'strlen("UET") walks U,E,T, null. Returns 3.',
      },
      {
        title: 'Equal test',
        body: 'strcmp("A","A") is 0. (0==0) is true, cout of that true is 1. Different words: non-zero.',
      },
      {
        title: 'Copy then look inside',
        body: 'strcpy(b, "VU"); b is VU. b[0] is V. The null sits at b[2].',
      },
      {
        title: 'Join',
        body: 'char b[20] = "CS"; strcat(b, "201"); b is CS201. dest started as a real string. That matters.',
      },
    ],
  },
  'cs-l18': {
    love: {
      emoji: '📂',
      text: 'Files remember after the program ends. So will I — after this mid, after finals, after every version of us.',
    },
    tags: [
      { kind: 'new', label: 'File streams' },
      { kind: 'exam', label: 'ifstream / ofstream' },
      { kind: 'vu', label: 'Always check open' },
    ],
    story: [
      'cout is a stream to the screen. A file stream is the same idea aimed at a disk file. ofstream writes (output file). ifstream reads (input file). fstream can do both. Include <fstream>.',
      'Open, check, use, close. if (!fout) means the open failed (wrong path, no permission). Never pretend the file is ready. Writing uses << just like cout. Reading uses >> or getline just like cin. That is why Lecture 18 output quizzes can be practiced with cout: the operators are the same.',
      'A text file is just characters, including newlines. "id\\nmark" is two lines. Two couts without a newline append on the same line — same as two << into a file. Append mode adds to the end instead of erasing the file.',
      'This browser lab cannot give you a real VU hard disk. Practice the format and the if (!file) guard here, then do a real .txt in Dev-C++ once on a PC. The exam cares about the ideas more than the folder path.',
    ],
    terms: [
      {
        name: 'ofstream',
        tag: 'exam',
        definition: 'Output file stream — you write to a file.',
        likeThis: 'A notebook you are filling. Same pen as cout, different paper.',
        why: 'fout << "CS" << 201; looks like cout.',
      },
      {
        name: 'ifstream',
        tag: 'exam',
        definition: 'Input file stream — you read from a file.',
        likeThis: 'Reading someone else’s notebook with the same eyes as cin.',
        why: 'fin >> id >> marks;',
      },
      {
        name: 'Failed open',
        tag: 'trap',
        definition: 'Always test the stream. if (!file) handle the error.',
        likeThis: 'You cannot read a diary that never opened. Check the lock.',
        why: 'VU hammers this. Silent continue = wrong program.',
      },
      {
        name: 'close()',
        tag: 'remember',
        definition: 'Flushes and releases the file. It does not print “closed.”',
        likeThis: 'Putting the diary back on the shelf. The shelf does not announce it.',
        why: 'Output of close is silence. Your program prints only what you <<.',
      },
    ],
    diagrams: [
      {
        kind: 'flow',
        title: 'A file program’s manners',
        caption: 'Skip “check” and you will write a mid-style wrong program even if the rest is pretty.',
        steps: [
          { title: 'Include', body: '#include <fstream>' },
          { title: 'Open', body: 'ofstream fout("pay.txt");' },
          { title: 'Check', body: 'if (!fout) { cout << "error"; return 1; }' },
          { title: 'Use', body: 'fout << name << " " << salary;' },
          { title: 'Close', body: 'fout.close();' },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'Same operators',
        body: 'cout << "CS" << 201 prints CS201. A file << does the same characters into a .txt. No extra space unless you write one.',
      },
      {
        title: 'Check is a real branch',
        body: 'bool ok = false; if (!ok) print error; else print ready. That is the failed-open idea with the disk removed.',
      },
      {
        title: 'Two writes append in the stream',
        body: '<< "pay" then << "roll" becomes payroll. Same in a file unless you put a newline between.',
      },
      {
        title: 'Then do it on a PC',
        body: 'Create pay.txt on the desktop in Dev-C++, read it back, print the line. Once you have seen a real file, the MCQs feel like English.',
      },
    ],
  },
}
