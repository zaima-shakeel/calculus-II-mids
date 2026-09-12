import type { CsLecture } from './types'

export const lectures712: CsLecture[] = [
  {
    id: 'cs-l07',
    number: '7',
    title: 'do-while, for, and ++ / --',
    shortTitle: 'for & do-while',
    videoId: 'dPxtptavsP8',
    overview:
      'Lecture 7 adds do-while (body runs at least once), the for loop (init; test; update in one line), and increment/decrement operators ++ and --.',
    takeaways: [
      'do { body } while (condition); is a post-test loop.',
      'for (i = 1; i <= n; i++) packs init, test, and update.',
      '++i increments then uses; i++ uses then increments.',
    ],
    concepts: [
      { name: 'do-while', definition: 'Execute the body first, then test. Guarantees one run.', explanation: 'Guess-the-letter at least once — the handout example.' },
      { name: 'for loop', definition: 'for (init; condition; update) statement;', explanation: 'Best when you know how many times you will repeat.' },
      { name: '++ and --', definition: 'Increment / decrement by one.', explanation: 'Prefix ++i changes first; postfix i++ yields the old value.' },
    ],
    examples: [
      {
        title: 'for vs while',
        code: `for (int i = 1; i <= 5; i++)
    cout << i << " ";

// same idea:
int i = 1;
while (i <= 5) {
    cout << i << " ";
    i++;
}`,
      },
      {
        title: 'Prefix vs postfix',
        code: `int x = 5;
cout << x++; // prints 5, x becomes 6
cout << ++x; // x becomes 7, prints 7`,
      },
    ],
    traps: [
      'Putting a semicolon after for (...); which makes an empty loop.',
      'Using i++ when the current value should already be the new one.',
      'do-while missing the trailing semicolon after while().',
    ],
    memorize: [
      'do-while always runs once.',
      'for (init; test; update)',
      'i++ vs ++i matter inside expressions.',
    ],
    mcqs: [
      { question: 'do-while is a:', options: ['Pre-test loop', 'Post-test loop', 'Function', 'Type'], correct: 1, explanation: 'Test happens after the body.' },
      { question: 'for (int i=0; i<3; i++) runs the body:', options: ['0 times', '2 times', '3 times', 'Forever'], correct: 2, explanation: 'i = 0,1,2.' },
      { question: 'After int x=3; ++x; x is:', options: ['3', '4', '2', '1'], correct: 1, explanation: 'Prefix increment.' },
      { question: 'int x=3; cout << x++; prints:', options: ['4', '3', '2', 'nothing'], correct: 1, explanation: 'Postfix yields the old value.' },
      { question: 'A for loop with a semicolon right after ) :', options: ['Repeats the next line', 'Has an empty body', 'Cannot compile', 'Calls main'], correct: 1, explanation: 'Classic exam trap.' },
      { question: 'Which loop is nicest for a known count?', options: ['do-while only', 'for', 'switch', 'if'], correct: 1, explanation: 'Init/test/update sit together.' },
      { question: 'do { ... } while (0); runs the body:', options: ['Never', 'Once', 'Forever', 'Twice'], correct: 1, explanation: 'Body first, then 0 is false.' },
      { question: 'i-- means:', options: ['i = i - 1', 'i = -i', 'i = 0', 'delete i'], correct: 0, explanation: 'Decrement.' },
      { question: 'The three parts of for are separated by:', options: ['Commas', 'Semicolons', 'Colons', 'Dots'], correct: 1, explanation: 'init; condition; update.' },
      { question: 'Lecture 7’s guess-the-character example needs do-while because:', options: ['C++ forbids while', 'The user must try at least once', 'Files cannot open', 'main is optional'], correct: 1, explanation: 'Post-test guarantee.' },
    ],
    outputGuess: [
      {
        title: 'for loop output',
        code: `#include <iostream>
using namespace std;
int main() {
    for (int i = 0; i < 3; i++)
        cout << i;
    return 0;
}`,
        options: ['123', '012', '0123', '3'],
        correct: 1,
        explanation: 'i takes 0, 1, 2.',
      },
      {
        title: 'postfix in a loop',
        code: `#include <iostream>
using namespace std;
int main() {
    int n = 2;
    cout << n++ << n;
    return 0;
}`,
        options: ['22', '23', '32', '33'],
        correct: 1,
        explanation: 'Prints 2, then n is 3, then prints 3 → 23. (No extra space.)',
      },
    ],
    coding: [
      {
        title: 'Factorial with for',
        prompt: 'Read n and print n! (n is a small positive integer). Input 5 → 120.',
        starter: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    return 0;
}
`,
        stdin: '5',
        expected: '120',
      },
    ],
  },
  {
    id: 'cs-l08',
    number: '8',
    title: 'switch, break, and continue',
    shortTitle: 'switch / break',
    videoId: 'LfIaSt20yoM',
    overview:
      'Lecture 8 replaces expensive chains of ifs with switch for multi-way decisions (grades, tax slabs). break leaves a switch or loop; continue skips the rest of the current iteration. Structured-programming flowchart rules close the lecture.',
    takeaways: [
      'switch (expr) { case k: ... break; default: ... }',
      'Without break, execution falls through to the next case.',
      'continue jumps to the next loop iteration; break leaves the loop.',
    ],
    concepts: [
      { name: 'switch', definition: 'Multi-way selection on an integer or character expression.', explanation: 'Cheaper and clearer than five separate ifs on grade.' },
      { name: 'break', definition: 'Exit the nearest switch or loop immediately.', explanation: 'Required after most cases to avoid fall-through.' },
      { name: 'continue', definition: 'Skip the remaining statements of this iteration.', explanation: 'The loop test still runs again.' },
    ],
    examples: [
      {
        title: 'Grade description',
        code: `switch (grade) {
    case 'A': cout << "Excellent"; break;
    case 'B': cout << "Very Good"; break;
    case 'C': cout << "Good"; break;
    case 'D': cout << "Poor"; break;
    case 'F': cout << "Fail"; break;
    default:  cout << "Invalid";
}`,
      },
    ],
    traps: [
      'Forgetting break → several cases print together.',
      'switch cannot test floats or strings in classic C++.',
      'default is optional but you should handle bad input.',
    ],
    memorize: [
      'case labels must be constant.',
      'Fall-through happens until break.',
      'continue ≠ break.',
    ],
    mcqs: [
      { question: 'switch is best when:', options: ['You need a fraction test', 'One variable matches one of several constants', 'You open a file', 'You write comments'], correct: 1, explanation: 'Multi-way equality on one expression.' },
      { question: 'Missing break in a case causes:', options: ['A linker error', 'Fall-through into the next case', 'An infinite loop always', 'main to restart'], correct: 1, explanation: 'Handout warning.' },
      { question: 'default runs when:', options: ['Every case runs', 'No case matches', 'The file is empty', 'cin fails only'], correct: 1, explanation: 'Catch-all branch.' },
      { question: 'continue in a for loop:', options: ['Ends the whole program', 'Skips to the next iteration', 'Deletes the counter', 'Calls switch'], correct: 1, explanation: 'Update still happens in for.' },
      { question: 'break in a while loop:', options: ['Restarts the loop', 'Leaves the loop', 'Skips one statement only', 'Is illegal'], correct: 1, explanation: 'Control goes to the first statement after the loop.' },
      { question: 'VU says many separate ifs are “expensive” because:', options: ['They use more disk', 'The CPU evaluates many decisions', 'They cannot compile', 'cout is banned'], correct: 1, explanation: 'switch / nested else-if is cheaper when only one path is true.' },
      { question: 'A case label must be:', options: ['A variable', 'A constant', 'A function', 'A float expression'], correct: 1, explanation: 'Compile-time constant.' },
      { question: 'switch (3.14) in standard C++:', options: ['Is the usual pattern', 'Is not allowed (not integral)', 'Prints pi', 'Opens a file'], correct: 1, explanation: 'Integral / enum / char types.' },
      { question: 'Structured programming in this lecture stresses:', options: ['Goto everywhere', 'Single-entry, single-exit flow', 'No loops ever', 'Only assembly'], correct: 1, explanation: 'Flowchart guidelines in Lecture 8.' },
      { question: 'case \'A\': and case \'a\': are:', options: ['The same', 'Different cases', 'Illegal together', 'Comments'], correct: 1, explanation: 'C++ is case sensitive.' },
    ],
    outputGuess: [
      {
        title: 'Fall-through',
        code: `#include <iostream>
using namespace std;
int main() {
    int n = 1;
    switch (n) {
        case 1: cout << "A";
        case 2: cout << "B"; break;
        default: cout << "C";
    }
    return 0;
}`,
        options: ['A', 'AB', 'ABC', 'B'],
        correct: 1,
        explanation: 'No break after case 1, so A then B, then break.',
      },
    ],
    coding: [
      {
        title: 'Day name',
        prompt: 'Read an integer 1–3. Print Mon, Tue, or Wed. Any other number: Print Invalid.',
        starter: `#include <iostream>
using namespace std;

int main() {
    int d;
    cin >> d;
    
    return 0;
}
`,
        stdin: '2',
        expected: 'Tue',
        hint: 'Use switch with break on each case.',
      },
    ],
  },
  {
    id: 'cs-l09',
    number: '9',
    title: 'Functions I — Design and Structure',
    shortTitle: 'Functions I',
    videoId: 'vsgL-YhEFVM',
    overview:
      'Lecture 9 introduces functions as subtasks (top-down / divide and conquer). A function has a return type, name, parameter list, and body. Some return a value; some (void) only do work. Declaration (prototype) is separate from definition.',
    takeaways: [
      'returnType name(parameters) { body }',
      'Prototype: returnType name(types); before you call it.',
      'main is itself a function; C/C++ programs are built from functions.',
    ],
    concepts: [
      { name: 'Function', definition: 'A named block that receives input, does work, and may return a result.', explanation: 'Like asking the network admin “how many students are logged in?” and only getting the count.' },
      { name: 'Declaration vs definition', definition: 'Declaration / prototype is the header; definition is the actual code.', explanation: 'The compiler needs the prototype before the first call if the definition is below.' },
      { name: 'void functions', definition: 'Functions that return no value.', explanation: 'Used for printing or changing things through parameters (later, references).' },
    ],
    examples: [
      {
        title: 'Square of an integer',
        code: `int square(int n) {
    return n * n;
}
int main() {
    cout << square(5); // 25
}`,
      },
    ],
    traps: [
      'Calling a function that is neither defined nor prototyped above the call.',
      'Forgetting return in a non-void function.',
      'Confusing the function name with a variable of the same name.',
    ],
    memorize: [
      'Prototype = return type + name + parameter types + ;',
      'return hands a value back to the caller.',
      'Information hiding: the caller need not know the internals.',
    ],
    mcqs: [
      { question: 'Top-down design means:', options: ['Write machine code first', 'Split a big task into smaller functions', 'Avoid functions', 'Only use main'], correct: 1, explanation: 'Stool: seat + three legs. House: rooms, then bricks.' },
      { question: 'A function prototype ends with:', options: ['{', ';', ':', '#'], correct: 1, explanation: 'It is a declaration.' },
      { question: 'void show() means the function:', options: ['Returns an int', 'Returns no value', 'Cannot have parameters', 'Is the linker'], correct: 1, explanation: 'No return value.' },
      { question: 'The function that starts the program is:', options: ['include', 'main', 'square', 'cout'], correct: 1, explanation: 'Always main.' },
      { question: 'return n*n; sends the value to:', options: ['The operating system only', 'The caller', 'A header file', 'The disk'], correct: 1, explanation: 'Caller receives the result.' },
      { question: 'Information hiding means:', options: ['Never comment', 'The caller does not need the function’s inner steps', 'Hide the .exe', 'Delete variables'], correct: 1, explanation: 'LMS example in the handout.' },
      { question: 'int square(int n) — n is a:', options: ['Return type', 'Parameter', 'Header file', 'Keyword'], correct: 1, explanation: 'Input to the function.' },
      { question: 'C is described in this lecture as:', options: ['Only object-oriented', 'Function-oriented', 'A database', 'An OS'], correct: 1, explanation: 'Programs are written as functions.' },
      { question: 'If definition is below main, you should:', options: ['Skip compiling', 'Write a prototype above main', 'Rename main', 'Use goto'], correct: 1, explanation: 'So the compiler knows the shape of the call.' },
      { question: 'Reusing a function is valuable because:', options: ['You type the same logic once', 'Functions disable loops', 'main becomes illegal', 'cout stops working'], correct: 0, explanation: 'Three identical stool legs from one pattern.' },
    ],
    outputGuess: [
      {
        title: 'Call a function',
        code: `#include <iostream>
using namespace std;
int add(int a, int b) { return a + b; }
int main() {
    cout << add(2, 3);
    return 0;
}`,
        options: ['23', '5', '2', 'error'],
        correct: 1,
        explanation: '2+3=5.',
      },
    ],
    coding: [
      {
        title: 'Write maxOfTwo',
        prompt: 'Read two integers and print the larger one. Use a function int maxOfTwo(int a, int b).',
        starter: `#include <iostream>
using namespace std;

int maxOfTwo(int a, int b) {
    
}

int main() {
    int x, y;
    cin >> x >> y;
    cout << maxOfTwo(x, y);
    return 0;
}
`,
        stdin: '8 3',
        expected: '8',
      },
    ],
  },
  {
    id: 'cs-l10',
    number: '10',
    title: 'Functions II — Headers, Scope, Call by Value',
    shortTitle: 'Functions II',
    videoId: 'x-iL0r9bQgg',
    overview:
      'Lecture 10: put prototypes in header files, #define named constants such as pi, understand scope (local vs global), and the difference between call by value and call by reference.',
    takeaways: [
      '#include "area.h" pastes your prototypes.',
      'A local variable is visible only inside its block.',
      'Call by value copies the argument; the original stays safe. Call by reference (pointers, later &) can change it.',
    ],
    concepts: [
      { name: 'Header file', definition: 'A .h file of prototypes and constants you include in many programs.', explanation: 'Beats pasting twenty prototypes above every main.' },
      { name: '#define', definition: '#define pi 3.1415926 — a name the preprocessor replaces with a value.', explanation: 'Not a real variable; you cannot assign to pi.' },
      { name: 'Scope', definition: 'Where an identifier is visible.', explanation: 'int i inside func1 is invisible in func2.' },
      { name: 'Call by value', definition: 'The function receives a copy.', explanation: 'Changing the parameter does not change the caller’s variable.' },
    ],
    examples: [
      {
        title: 'Call by value does not change x',
        code: `void addOne(int n) { n = n + 1; }
int main() {
    int x = 5;
    addOne(x);
    cout << x; // still 5
}`,
      },
    ],
    traps: [
      'Using a local variable outside its block.',
      'Treating #define pi as an assignable variable.',
      'Expecting a by-value parameter to update the caller.',
    ],
    memorize: [
      'Local scope = inside the braces where it was declared.',
      'Call by value = copy.',
      '#define is preprocessor text replacement.',
    ],
    mcqs: [
      { question: 'A header file commonly stores:', options: ['Only machine code', 'Function prototypes and constants', 'The operating system', 'RAM contents'], correct: 1, explanation: 'Lecture 10 purpose of .h files.' },
      { question: '#define pi 3.1415926 creates:', options: ['An assignable double variable', 'A named constant via the preprocessor', 'A function', 'A loop'], correct: 1, explanation: 'You cannot write pi = 3.' },
      { question: 'A variable declared inside a function is:', options: ['Global', 'Local to that function', 'Visible in every file', 'A header'], correct: 1, explanation: 'Scope rule.' },
      { question: 'Call by value means:', options: ['The original variable is renamed', 'A copy is passed', 'Pointers are required', 'main is skipped'], correct: 1, explanation: 'Original remains unchanged.' },
      { question: '#include is processed by the:', options: ['Loader', 'Preprocessor', 'Debugger', 'User'], correct: 1, explanation: 'Text inclusion before compile.' },
      { question: 'Two functions can each have int i because:', options: ['C++ forbids it', 'Each i has local scope', 'They share one i', 'i is a keyword'], correct: 1, explanation: 'Separate stack frames.' },
      { question: 'Call by reference is introduced so that:', options: ['Functions can change the caller’s data', 'Loops become illegal', 'cout is removed', 'Headers vanish'], correct: 0, explanation: 'Later done with pointers / &.' },
      { question: 'Putting prototypes in a header reduces:', options: ['CPU speed always', 'Repetition and clutter in each file', 'The need for main', 'Integer size'], correct: 1, explanation: 'One include line instead of a long list.' },
      { question: 'After void f(int n){ n=0; } and int x=4; f(x); x is:', options: ['0', '4', 'undefined', '1'], correct: 1, explanation: 'By-value copy.' },
      { question: 'A good reason to name pi instead of writing 3.1415926 is:', options: ['It makes formulas readable and consistent', 'C++ requires it', 'It speeds the linker', 'It creates a thread'], correct: 0, explanation: 'Handout: 2 * pi * radius is obviously circumference.' },
    ],
    outputGuess: [
      {
        title: 'Scope and value',
        code: `#include <iostream>
using namespace std;
void bump(int n) { n = n + 10; }
int main() {
    int n = 1;
    bump(n);
    cout << n;
    return 0;
}`,
        options: ['11', '1', '10', '0'],
        correct: 1,
        explanation: 'n in main is a different copy from n in bump.',
      },
    ],
    coding: [
      {
        title: 'square function',
        prompt: 'Read an integer n and print n*n using a function int square(int n).',
        starter: `#include <iostream>
using namespace std;

int square(int n) {
    
}

int main() {
    int n;
    cin >> n;
    cout << square(n);
    return 0;
}
`,
        stdin: '6',
        expected: '36',
      },
    ],
  },
  {
    id: 'cs-l11',
    number: '11',
    title: 'Arrays I — Storage, Init, Linear Search',
    shortTitle: 'Arrays I',
    videoId: 'jo_ildFwkrI',
    overview:
      'Lecture 11: an array is a collection of same-type values under one name, indexed from 0. You initialize, copy with a loop, search linearly, and can mark a size with const.',
    takeaways: [
      'int a[5]; has valid indexes 0..4.',
      'Copying arrays requires a loop (a = b does not copy elements).',
      'Linear search walks from the first element to the last.',
    ],
    concepts: [
      { name: 'Array', definition: 'A named sequence of identical-type elements in contiguous memory.', explanation: 'Ten ages become age[10] instead of age1…age10.' },
      { name: 'Index', definition: 'The integer address of an element, starting at 0.', explanation: 'a[0] is first; a[n-1] is last.' },
      { name: 'const', definition: 'A name whose value cannot change.', explanation: 'const int SIZE = 10; then int a[SIZE];' },
    ],
    examples: [
      {
        title: 'Initialize and print',
        code: `int a[5] = {2, 4, 6, 8, 10};
for (int i = 0; i < 5; i++)
    cout << a[i] << " ";`,
      },
    ],
    traps: [
      'Using a[5] on an array of size 5 (valid is 0–4).',
      'Forgetting that uninitialized elements hold garbage.',
      'Trying a = b to copy arrays.',
    ],
    memorize: [
      'Indexes start at 0.',
      'Same type in one array — don’t mix height and age.',
      'Linear search: compare one by one.',
    ],
    mcqs: [
      { question: 'The first index of an array is:', options: ['1', '0', '-1', 'n'], correct: 1, explanation: 'Zero-based indexing in C++.' },
      { question: 'int a[4]; valid indexes are:', options: ['1–4', '0–3', '0–4', '4 only'], correct: 1, explanation: 'Size 4 → 0,1,2,3.' },
      { question: 'Arrays store:', options: ['Mixed unrelated types in one list', 'Same-type values', 'Only functions', 'Only files'], correct: 1, explanation: 'Handout: height and age need two arrays.' },
      { question: 'Linear search means:', options: ['Binary tree walk', 'Check elements one by one', 'Sort first always', 'Use switch on each'], correct: 1, explanation: 'Lecture 11 sample.' },
      { question: 'const int N = 5; means N:', options: ['Can be incremented', 'Cannot be assigned later', 'Is a function', 'Is float'], correct: 1, explanation: 'Constant size.' },
      { question: 'To copy array a into b you:', options: ['Write b = a;', 'Loop and assign each b[i] = a[i]', 'Use cout', 'Call main'], correct: 1, explanation: 'Element-wise copy.' },
      { question: 'int a[3] = {1,2,3}; a[1] is:', options: ['1', '2', '3', 'garbage'], correct: 1, explanation: 'Index 1 is the second element.' },
      { question: 'Accessing a[10] in int a[10] is:', options: ['Fine (last element)', 'Out of range (last is a[9])', 'A comment', 'Always 0'], correct: 1, explanation: 'Off-by-one / buffer overrun.' },
      { question: 'Uninitialized local array elements are:', options: ['Always 0', 'Garbage until you set them', 'Always -1', 'Illegal to declare'], correct: 1, explanation: 'Initialize or fill with a loop.' },
      { question: 'int a[] = {1,2,3}; has length:', options: ['0', '2', '3', 'Unknown forever'], correct: 2, explanation: 'The compiler counts the initializers.' },
    ],
    outputGuess: [
      {
        title: 'Indexes',
        code: `#include <iostream>
using namespace std;
int main() {
    int a[3] = {4, 5, 6};
    cout << a[0] + a[2];
    return 0;
}`,
        options: ['4', '9', '10', '15'],
        correct: 2,
        explanation: '4+6=10.',
      },
    ],
    coding: [
      {
        title: 'Sum of 4 numbers in an array',
        prompt: 'Read 4 integers into an array and print their sum. Input 1 2 3 4 → 10.',
        starter: `#include <iostream>
using namespace std;

int main() {
    int a[4];
    
    return 0;
}
`,
        stdin: '1 2 3 4',
        expected: '10',
      },
    ],
  },
  {
    id: 'cs-l12',
    number: '12',
    title: 'Arrays II — Characters, Sort, Search, 2D',
    shortTitle: 'Arrays II',
    videoId: 'm6Qh166b5Ak',
    overview:
      'Lecture 12: character arrays (C-strings), comparing and sorting arrays, passing arrays to functions, and the first look at multidimensional arrays.',
    takeaways: [
      'A C-string is a char array ending with \'\\0\'.',
      'Sorting rearranges elements (bubble sort appears with pointers in L14; here you treat the idea).',
      'int m[3][3] is three rows of three columns.',
    ],
    concepts: [
      { name: 'Character array', definition: 'char name[20] = "Ali"; stores characters plus a null terminator.', explanation: 'cout << name; prints until \\0.' },
      { name: 'Passing arrays to functions', definition: 'void f(int a[], int n) — the function sees the same memory.', explanation: 'Array name decays to the address of the first element.' },
      { name: '2D array', definition: 'A table: row index then column index.', explanation: 'm[i][j] is row i, column j.' },
    ],
    examples: [
      {
        title: 'C-string',
        code: `char name[] = "Zaima";
cout << name; // Zaima`,
      },
      {
        title: '2D access',
        code: `int m[2][2] = {{1,2},{3,4}};
cout << m[1][0]; // 3`,
      },
    ],
    traps: [
      'Forgetting the extra byte for \\0 when sizing a char array.',
      'Comparing C-strings with == (compares addresses, not letters).',
      'Mixing up row and column indexes.',
    ],
    memorize: [
      'Strings in C style end with \\0.',
      'm[r][c] — row first.',
      'An array argument is essentially a pointer to the first element.',
    ],
    mcqs: [
      { question: 'The hidden character at the end of "Hi" is:', options: ['space', '\\0', '\\n', 'H'], correct: 1, explanation: 'Null terminator.' },
      { question: 'char s[] = "Hi"; uses how many characters including \\0?', options: ['2', '3', '1', '0'], correct: 1, explanation: 'H, i, \\0.' },
      { question: 'int m[2][3] has how many ints?', options: ['2', '3', '5', '6'], correct: 3, explanation: '2 rows × 3 columns.' },
      { question: 'm[0][1] in {{9,8},{7,6}} is:', options: ['9', '8', '7', '6'], correct: 1, explanation: 'First row, second column.' },
      { question: 'Passing int a[] to a function lets the function:', options: ['Receive a full copy always', 'See the original elements', 'Only print them', 'Change main’s name'], correct: 1, explanation: 'Same memory.' },
      { question: '== on two char arrays compares:', options: ['Every letter always', 'The starting addresses', 'Their lengths only', 'Nothing'], correct: 1, explanation: 'Use strcmp later (L17) for content.' },
      { question: 'Sorting an array means:', options: ['Deleting it', 'Arranging elements in order', 'Printing once', 'Compiling it'], correct: 1, explanation: 'Lecture 12 topic.' },
      { question: 'A 2D array is best pictured as:', options: ['A single number', 'A matrix / table', 'A compiler', 'A header'], correct: 1, explanation: 'Rows and columns.' },
      { question: 'char name[5] = "Ali"; is safe because:', options: ['Ali has 5 letters', 'A,l,i,\\0 fit in 5', 'No null is needed', '5 is ignored'], correct: 1, explanation: '4 bytes used, 1 spare.' },
      { question: 'Functions + arrays together let you:', options: ['Reuse search/sort on any list', 'Avoid indexes', 'Ban loops', 'Skip prototypes'], correct: 0, explanation: 'Handout: pass the array and its size.' },
    ],
    outputGuess: [
      {
        title: '2D element',
        code: `#include <iostream>
using namespace std;
int main() {
    int m[2][2] = {{1, 2}, {3, 4}};
    cout << m[1][1];
    return 0;
}`,
        options: ['1', '2', '3', '4'],
        correct: 3,
        explanation: 'Row 1, column 1 is 4.',
      },
    ],
    coding: [
      {
        title: 'Largest of 5',
        prompt: 'Read 5 integers and print the largest.',
        starter: `#include <iostream>
using namespace std;

int main() {
    int a[5];
    
    return 0;
}
`,
        stdin: '4 9 1 7 3',
        expected: '9',
      },
    ],
  },
]
