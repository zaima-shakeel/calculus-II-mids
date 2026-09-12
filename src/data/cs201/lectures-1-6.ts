import type { CsLecture } from './types'

const starter = `#include <iostream>
using namespace std;

int main() {
    
    return 0;
}
`

export const lectures16: CsLecture[] = [
  {
    id: 'cs-l01',
    number: '1',
    title: 'What Programming Actually Is',
    shortTitle: 'Introduction',
    videoId: 'V651D2t_X0Q',
    overview:
      'Official CS201 Lecture 1 (handout + VU video): a program is a precise sequence of steps that solves a problem. Programming trains planning, attention to detail, and problem solving — not just typing code.',
    takeaways: [
      'A program is a precise sequence of steps for a particular problem.',
      'Computers are stupid: they do exactly what you write, nothing more.',
      'Recipe: analyze → abstract with examples → write precisely → test → revise.',
    ],
    concepts: [
      {
        name: 'Program',
        definition: 'A precise sequence of steps to solve a particular problem.',
        explanation: 'If the steps are vague, the computer cannot “figure out the rest.”',
      },
      {
        name: 'Skills you need',
        definition: 'Attention to detail, reusability, a friendly interface, comments, and remembering that computers do not guess.',
        explanation: 'A grammatically correct program can still be logically wrong — like a poem that parses but means nothing.',
      },
      {
        name: 'Design recipe',
        definition: 'Analyze the word problem, extract the essence with examples, write it precisely, then test and revise.',
        explanation: 'VU uses the payroll example: split staff types, deductions, and bonuses before you write a single line.',
      },
    ],
    examples: [
      {
        title: 'Reusable thinking (handout)',
        code: `// Area of a circle can later compute a ring:
// ring = area(outer) - area(inner)
double area(double r) {
    const double PI = 3.1415926;
    return PI * r * r;
}`,
        note: 'Write once, reuse for related problems. That is the reusability skill from Lecture 1.',
      },
    ],
    traps: [
      'Assuming the user already knows computers.',
      'Writing code that compiles but has broken logic.',
      'Skipping comments because “I will remember.”',
    ],
    memorize: [
      'Program = precise sequence of steps.',
      'Computers do exactly what they are told.',
      'Comment liberally; comments cost no runtime.',
    ],
    mcqs: [
      { question: 'A program is best defined as:', options: ['Any English paragraph', 'A precise sequence of steps that solves a problem', 'A Windows application only', 'Random computer activity'], correct: 1, explanation: 'Lecture 1 definition from the official handout.' },
      { question: 'Why does VU say computers are “stupid”?', options: ['They are slow', 'They do exactly what you write, no more and no less', 'They cannot store files', 'They only understand Urdu'], correct: 1, explanation: 'They never infer intent the way a person does.' },
      { question: 'Which skill is listed as essential in Lecture 1?', options: ['Drawing 3D games', 'Paying attention to detail', 'Memorizing Windows shortcuts', 'Avoiding comments'], correct: 1, explanation: 'Detail is the first skill on the official list.' },
      { question: 'Comments in a C++ program:', options: ['Slow the program down', 'Are ignored by the compiler', 'Must appear in main only', 'Replace variables'], correct: 1, explanation: 'They document intent and take no memory at run time.' },
      { question: 'The design recipe starts with:', options: ['Buying Dev-C++', 'Analyzing the problem statement', 'Writing machine code', 'Linking libraries'], correct: 1, explanation: 'Analyze first, then abstract, write, test, revise.' },
      { question: 'A program that compiles but prints nonsense is usually:', options: ['A linker error', 'A logical error', 'A hardware fault', 'Correct by definition'], correct: 1, explanation: 'Grammar can be fine while logic is wrong.' },
      { question: 'Reusability in the handout example means:', options: ['Never writing functions', 'Using a circle-area idea later for a ring', 'Deleting old files', 'Avoiding variables'], correct: 1, explanation: 'Area of a ring = outer circle − inner circle.' },
      { question: 'A friendly user interface matters because:', options: ['Compilers require it', 'Users may not be computer literate', 'It makes comments illegal', 'C++ forbids cout'], correct: 1, explanation: 'Never assume the user already knows the machine.' },
      { question: 'Which activity is part of programming besides typing code?', options: ['Design, testing, and revision', 'Only compiling', 'Only installing Windows', 'Only drawing flowcharts forever'], correct: 0, explanation: '“Program, program and program” means the whole process.' },
      { question: 'Critical reading helps a programmer because:', options: ['You can skip the problem statement', 'You extract exactly what must be computed', 'C++ reads the essay for you', 'It replaces testing'], correct: 1, explanation: 'Lecture 1 links programming to analysis skills used in every profession.' },
    ],
    outputGuess: [
      {
        title: 'Comments vs output',
        code: `#include <iostream>
using namespace std;
int main() {
    // cout << "Hidden";
    cout << "Shown";
    return 0;
}`,
        options: ['HiddenShown', 'Shown', 'Hidden', 'Nothing'],
        correct: 1,
        explanation: 'The first cout is commented out, so only Shown prints.',
      },
    ],
    coding: [
      {
        title: 'Print a welcome line',
        prompt: 'Write a program that prints exactly: Ready to program',
        starter,
        expected: 'Ready to program',
        hint: 'Use cout << "Ready to program";',
      },
    ],
  },
  {
    id: 'cs-l02',
    number: '2',
    title: 'Software, History of C, and the IDE',
    shortTitle: 'Software & IDE',
    videoId: 'Emk9dXIci6M',
    overview:
      'Lecture 2 splits software into system vs application, tells the C history (BCPL → B → C by Dennis Ritchie), and walks the tool chain: editor → preprocessor → compiler → linker → loader.',
    takeaways: [
      'System software runs the machine; application software serves the end user.',
      'C came from BCPL and B at Bell Labs; ANSI standardized it in 1989.',
      'You write source, compile to object code, link libraries, then load into memory.',
    ],
    concepts: [
      { name: 'System software', definition: 'Controls hardware and other programs: OS, device drivers, utilities, compilers.', explanation: 'Windows, disk defragmenter, and g++ all sit in this family.' },
      { name: 'Application software', definition: 'Programs for end users: payroll, Word, GPS.', explanation: 'Built on top of the operating system.' },
      { name: 'Compiler vs interpreter', definition: 'A compiler translates the whole program; an interpreter goes line by line.', explanation: 'A compiler stops with no executable if it finds a syntax error. VU uses a compiler (Dev-C++).' },
      { name: 'Linker and loader', definition: 'Linker joins your object code with libraries. Loader places the executable in memory and starts main.', explanation: 'Without linking, cout would have no implementation.' },
    ],
    examples: [
      {
        title: 'The build chain',
        code: `// 1 Editor: you type source (.cpp)
// 2 Preprocessor: #include is pasted in
// 3 Compiler: source -> object (.o / .obj)
// 4 Linker: object + libraries -> .exe
// 5 Loader: .exe goes into RAM, main() starts`,
      },
    ],
    traps: [
      'Confusing compiler (whole file) with interpreter (line by line).',
      'Thinking a syntax error still produces a runnable .exe.',
      'Forgetting that drivers are system software, not applications.',
    ],
    memorize: [
      'OS, drivers, utilities = system software.',
      'Dennis Ritchie designed C; UNIX was written in C.',
      'Debugger finds logical errors while the program runs.',
    ],
    mcqs: [
      { question: 'Device drivers belong to:', options: ['Application software', 'System software', 'Only games', 'Word processors'], correct: 1, explanation: 'They let the OS talk to hardware.' },
      { question: 'Who developed the C language?', options: ['Ken Thompson only', 'Dennis Ritchie', 'Bill Gates', 'Bjarne Stroustrup only'], correct: 1, explanation: 'Ritchie at Bell Labs, using ideas from BCPL and B. Stroustrup later created C++.' },
      { question: 'A compiler, on a syntax error, typically:', options: ['Runs up to the bad line', 'Produces no executable', 'Ignores the error', 'Fixes the code'], correct: 1, explanation: 'Lecture 2 contrast with interpreters.' },
      { question: 'The linker’s job is to:', options: ['Print the program', 'Combine object code with libraries', 'Defragment the disk', 'Draw flowcharts'], correct: 1, explanation: 'It builds a standalone executable.' },
      { question: 'The loader:', options: ['Types your code', 'Puts the program in memory and starts it', 'Translates English to C', 'Deletes object files'], correct: 1, explanation: 'Last step before CPU execution.' },
      { question: 'Payroll software is:', options: ['An operating system', 'Application software', 'A device driver', 'A compiler'], correct: 1, explanation: 'End-user program.' },
      { question: 'C was standardized by ANSI in:', options: ['1967', '1970', '1989', '2001'], correct: 2, explanation: 'ANSI C, then ISO worldwide.' },
      { question: 'A debugger is mainly for:', options: ['Logical errors at run time', 'Buying RAM', 'Formatting disks', 'Writing novels'], correct: 0, explanation: 'You can pause, inspect variables, and step.' },
      { question: 'BCPL and B were:', options: ['Typed like modern C', 'Typeless languages', 'Only for graphics', 'Java dialects'], correct: 1, explanation: 'Every item was one memory word; the programmer interpreted it.' },
      { question: 'Disk defragmentation is an example of:', options: ['Application software', 'A utility (system software)', 'A header file', 'An interpreter'], correct: 1, explanation: 'Utilities manage system resources.' },
    ],
    outputGuess: [
      {
        title: 'Still just output',
        code: `#include <iostream>
using namespace std;
int main() {
    cout << "compile" << " " << "link" << " load";
    return 0;
}`,
        options: ['compile link load', 'compile\\nlink\\nload', 'compile', 'error'],
        correct: 0,
        explanation: 'Three insertions, one space between the first two words, then load.',
      },
    ],
    coding: [
      {
        title: 'Name the toolchain',
        prompt: 'Print exactly this line:\neditor compiler linker loader',
        starter,
        expected: 'editor compiler linker loader',
      },
    ],
  },
  {
    id: 'cs-l03',
    number: '3',
    title: 'Starting to C: First Program, Variables, Types',
    shortTitle: 'First C program',
    videoId: 'cDP1PEj0Ukg',
    overview:
      'Lecture 3 writes the first program, introduces variables and data types, and covers arithmetic operators plus precedence. VU historically used #include <iostream.h> and main(); modern C++ uses <iostream>, using namespace std, and int main().',
    takeaways: [
      '#include brings in library declarations; main is where execution starts.',
      'A variable is a named memory location with a type.',
      'int, float/double, char, bool — choose the type that matches the data.',
    ],
    concepts: [
      { name: 'Variable', definition: 'A named place in memory that holds a value of a given type.', explanation: 'int age = 20; reserves space for an integer and stores 20.' },
      { name: 'Data types', definition: 'int, char, float/double, bool (and later arrays, pointers).', explanation: 'The type decides size, operations, and how cout prints the value.' },
      { name: 'Arithmetic operators', definition: '+ - * / %', explanation: 'Integer division truncates: 5/2 is 2. % is remainder and needs integers.' },
      { name: 'Precedence', definition: '* / % bind tighter than + -.', explanation: 'Use parentheses when the default order is not what you mean.' },
    ],
    examples: [
      {
        title: 'First modern C++ program',
        code: `#include <iostream>
using namespace std;
int main() {
    int age;
    cout << "Enter age: ";
    cin >> age;
    cout << "You entered " << age;
    return 0;
}`,
        note: 'VU handout shows older iostream.h. On this site we use standard C++ so the lab can compile.',
      },
      {
        title: 'Integer division',
        code: `cout << 5 / 2;   // 2
cout << 5 % 2;   // 1
cout << 5.0 / 2; // 2.5`,
      },
    ],
    traps: [
      'Using a variable before giving it a value.',
      'Expecting 5/2 to be 2.5 when both sides are int.',
      'Forgetting that C++ is case sensitive: Age and age are different.',
    ],
    memorize: [
      'Execution starts at main.',
      'cin >> reads; cout << writes.',
      '% works on integers only.',
    ],
    mcqs: [
      { question: 'Every C/C++ program begins execution from:', options: ['include', 'main', 'cout', 'the last function'], correct: 1, explanation: 'The loader starts at main.' },
      { question: '#include <iostream> is handled by the:', options: ['Linker', 'Preprocessor', 'Loader', 'Debugger'], correct: 1, explanation: 'The preprocessor pastes header content.' },
      { question: '5 / 2 in integer arithmetic is:', options: ['2.5', '2', '3', '1'], correct: 1, explanation: 'The fractional part is dropped.' },
      { question: 'The remainder operator is:', options: ['/', '%', '*', '#'], correct: 1, explanation: '5 % 2 == 1.' },
      { question: 'Which type stores a single character?', options: ['int', 'char', 'float', 'bool'], correct: 1, explanation: "char letter = 'A';" },
      { question: 'cin uses the operator:', options: ['<<', '>>', '&&', '::'], correct: 1, explanation: 'Extraction operator >>.' },
      { question: 'A variable name may start with:', options: ['A digit', 'A letter or underscore', 'A hyphen', 'A space'], correct: 1, explanation: 'Identifiers cannot start with a number.' },
      { question: 'bool typically represents:', options: ['Text paragraphs', 'true or false', 'Only negative numbers', 'Files'], correct: 1, explanation: 'Boolean type.' },
      { question: '2 + 3 * 4 equals:', options: ['20', '14', '24', '9'], correct: 1, explanation: 'Multiply first: 2 + 12.' },
      { question: 'Uninitialized local variables:', options: ['Are always 0', 'Hold garbage until assigned', 'Cannot compile ever', 'Become functions'], correct: 1, explanation: 'Always assign before you read them.' },
    ],
    outputGuess: [
      {
        title: 'Precedence',
        code: `#include <iostream>
using namespace std;
int main() {
    cout << 2 + 3 * 4;
    return 0;
}`,
        options: ['20', '14', '24', '5'],
        correct: 1,
        explanation: '3*4 is 12, then plus 2 is 14.',
      },
      {
        title: 'Integer divide',
        code: `#include <iostream>
using namespace std;
int main() {
    cout << 7 / 2 << " " << 7 % 2;
    return 0;
}`,
        options: ['3.5 1', '3 1', '3 0', '1 3'],
        correct: 1,
        explanation: '7/2 → 3, 7%2 → 1.',
      },
    ],
    coding: [
      {
        title: 'Add two integers',
        prompt: 'Read two integers from input and print their sum only (no extra text).',
        starter: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    
    return 0;
}
`,
        stdin: '4 9',
        expected: '13',
        hint: 'cin >> a >> b; then cout << a + b;',
      },
    ],
  },
  {
    id: 'cs-l04',
    number: '4',
    title: 'Expressions and Operators',
    shortTitle: 'Expressions',
    videoId: 'N2z34DlPbfk',
    overview:
      'Lecture 4 works expressions in real programs (class average of ten ages), assignment, compound operators, and how a long formula becomes C++.',
    takeaways: [
      'An expression combines values and operators to produce a value.',
      'Assignment = stores a result; == compares.',
      'x += 2 is shorthand for x = x + 2.',
    ],
    concepts: [
      { name: 'Assignment', definition: 'variable = expression;', explanation: 'Right side is computed first, then stored on the left.' },
      { name: 'Compound assignment', definition: '+= -= *= /= %=', explanation: 'age += 1 adds one to age.' },
      { name: 'Expression vs statement', definition: 'An expression has a value; a statement does work (often ending with ;).', explanation: 'a + b is an expression; cout << a + b; is a statement.' },
    ],
    examples: [
      {
        title: 'Average of ages (Lecture 4 idea)',
        code: `int sum = 0, age, i = 1;
while (i <= 10) {
    cin >> age;
    sum = sum + age;
    i = i + 1;
}
cout << sum / 10.0;`,
        note: 'Divide by 10.0 so the average is not truncated.',
      },
    ],
    traps: [
      'Writing = when you meant ==.',
      'Integer average: sum/10 loses the fraction.',
      'Using a comma instead of a semicolon between statements.',
    ],
    memorize: [
      '= assigns, == compares.',
      'x += n  ⇒  x = x + n.',
      'Cast or use a float literal when you need a real average.',
    ],
    mcqs: [
      { question: 'After int x = 5; x += 3; x is:', options: ['3', '5', '8', '15'], correct: 2, explanation: '5 + 3 = 8.' },
      { question: 'The assignment operator is:', options: ['==', '=', '!=', ':='], correct: 1, explanation: 'Single equals stores a value.' },
      { question: 'To keep a fractional average you should:', options: ['Divide by 10', 'Divide by 10.0', 'Use %', 'Never use sum'], correct: 1, explanation: 'At least one operand must be floating-point.' },
      { question: 'Which is a compound assignment?', options: ['x == 2', 'x *= 2', 'x + 2', '2x'], correct: 1, explanation: '*= multiplies and stores.' },
      { question: 'int x = 10; x = x - 4; leaves x as:', options: ['10', '4', '6', '14'], correct: 2, explanation: '10 − 4.' },
      { question: 'An expression always:', options: ['Prints to the screen', 'Produces a value', 'Creates a file', 'Stops the program'], correct: 1, explanation: 'That value may then be assigned or printed.' },
      { question: 'sum = sum + age is the same as:', options: ['sum -= age', 'sum += age', 'sum == age', 'sum %= age'], correct: 1, explanation: 'Compound plus-equals.' },
      { question: 'If both operands of / are int, C++:', options: ['Rounds up', 'Truncates toward zero', 'Stores a string', 'Crashes'], correct: 1, explanation: 'Integer division.' },
      { question: 'Which statement is valid?', options: ['5 = x;', 'x = 5;', '= 5 x;', 'x == ;'], correct: 1, explanation: 'The left side must be a variable.' },
      { question: 'Lecture 4’s class-average problem needs:', options: ['Ten hard-coded ages only', 'A running sum of ten inputs', 'No variables', 'A switch on characters'], correct: 1, explanation: 'Prompt ten times, add, then divide.' },
    ],
    outputGuess: [
      {
        title: 'Compound assignment',
        code: `#include <iostream>
using namespace std;
int main() {
    int x = 4;
    x *= 3;
    x -= 2;
    cout << x;
    return 0;
}`,
        options: ['4', '10', '12', '14'],
        correct: 1,
        explanation: '4*3=12, 12-2=10.',
      },
    ],
    coding: [
      {
        title: 'Average of three marks',
        prompt: 'Read three integers and print their average as a floating value. For input 6 6 9 the output should be 7',
        starter: `#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    
    return 0;
}
`,
        stdin: '6 6 9',
        expected: '7',
        hint: 'Print (a+b+c)/3.0 — here it comes out as 7.',
      },
    ],
  },
  {
    id: 'cs-l05',
    number: '5',
    title: 'Decisions: if, if/else, Logical Operators',
    shortTitle: 'Decisions',
    videoId: 'RkVKkCs5Lek',
    overview:
      'Lecture 5 introduces decision making. The if statement runs a block only when a condition is true. if/else chooses one of two paths. Logical operators combine conditions. Flowcharts document the decision.',
    takeaways: [
      'if (condition) statement;',
      'Use braces for more than one statement.',
      '&& (and), || (or), ! (not) combine bool expressions.',
    ],
    concepts: [
      { name: 'if statement', definition: 'If the condition is true, execute the following statement or block.', explanation: 'if (shopOpen) buyMilk();' },
      { name: 'if / else', definition: 'One branch when true, the other when false.', explanation: 'Exactly one of the two blocks runs.' },
      { name: 'Relational operators', definition: '== != < > <= >=', explanation: 'They produce true or false.' },
      { name: 'Logical operators', definition: '&& || !', explanation: 'marks >= 50 && marks <= 100 is a range check.' },
    ],
    examples: [
      {
        title: 'Pass or fail',
        code: `int marks;
cin >> marks;
if (marks >= 50)
    cout << "Pass";
else
    cout << "Fail";`,
      },
      {
        title: 'Nested condition',
        code: `if (height > 6)
    cout << "Basketball squad";
else
    cout << "Not selected";`,
      },
    ],
    traps: [
      'if (x = 5) assigns 5 (always true) instead of comparing.',
      'A dangling else pairs with the nearest if.',
      'Forgetting braces when two statements should share a condition.',
    ],
    memorize: [
      '== compares; = assigns.',
      'true && false → false; true || false → true.',
      '!true → false.',
    ],
    mcqs: [
      { question: 'if (marks >= 50) is a:', options: ['Loop', 'Conditional statement', 'Compiler', 'Header'], correct: 1, explanation: 'Decision structure from Lecture 5.' },
      { question: 'The operator for “equal to” is:', options: ['=', '==', '===', ':='], correct: 1, explanation: 'Double equals.' },
      { question: '&& means:', options: ['Or', 'And', 'Not', 'Assign'], correct: 1, explanation: 'Both sides must be true.' },
      { question: 'if (x = 1) in C++:', options: ['Compares x with 1', 'Assigns 1 to x, then treats it as true', 'Is a syntax error always', 'Runs the else branch'], correct: 1, explanation: 'Classic exam trap.' },
      { question: 'else pairs with:', options: ['The first if in the file', 'The nearest unmatched if', 'main', 'cout'], correct: 1, explanation: 'Dangling-else rule.' },
      { question: '! (marks < 50) is the same as:', options: ['marks < 50', 'marks >= 50', 'marks == 50', 'marks != 50'], correct: 1, explanation: 'Negating a less-than flips to greater-or-equal.' },
      { question: 'A flowchart in this lecture is used to:', options: ['Compile C++', 'Picture the decision paths', 'Link object files', 'Format disks'], correct: 1, explanation: 'VU documents decisions with flowcharts.' },
      { question: 'Which condition is true when n is 0 to 10 inclusive?', options: ['n > 0 && n < 10', 'n >= 0 && n <= 10', 'n == 0 || n == 10 only', 'n != n'], correct: 1, explanation: 'Closed range.' },
      { question: 'If the condition is false and there is no else:', options: ['The if-block is skipped', 'The program crashes', 'main restarts', 'true is printed'], correct: 0, explanation: 'Control just continues after the if.' },
      { question: 'Logical OR is written:', options: ['&', '||', '| |', 'AND'], correct: 1, explanation: 'Double pipe.' },
    ],
    outputGuess: [
      {
        title: 'if / else',
        code: `#include <iostream>
using namespace std;
int main() {
    int m = 49;
    if (m >= 50)
        cout << "Pass";
    else
        cout << "Fail";
    return 0;
}`,
        options: ['Pass', 'Fail', '4950', 'nothing'],
        correct: 1,
        explanation: '49 is below 50.',
      },
    ],
    coding: [
      {
        title: 'Sign of a number',
        prompt: 'Read an integer. Print Positive if it is > 0, Zero if it is 0, otherwise Negative.',
        starter: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    return 0;
}
`,
        stdin: '-3',
        expected: 'Negative',
      },
    ],
  },
  {
    id: 'cs-l06',
    number: '6',
    title: 'Repetition: the while Loop',
    shortTitle: 'while loops',
    videoId: '2cBiPwivvgo',
    overview:
      'Lecture 6 introduces repetition. A while loop tests a condition, then repeats a body. Watch for overflow, infinite loops, and the loop properties: initialize, test, update.',
    takeaways: [
      'while (condition) { body } may run zero times if the test is already false.',
      'Every loop needs initialization, a test, and an update.',
      'If the update never makes the test false, you have an infinite loop.',
    ],
    concepts: [
      { name: 'while loop', definition: 'Pre-test loop: check first, then maybe execute the body.', explanation: 'Used for payroll-style repeated processing of many employees.' },
      { name: 'Infinite loop', definition: 'The condition never becomes false.', explanation: 'while (1) or forgetting i++ are common causes.' },
      { name: 'Overflow', definition: 'A value grows beyond what the type can store.', explanation: 'Keep adding to a short int and it wraps to garbage.' },
    ],
    examples: [
      {
        title: 'Count 1 to 5',
        code: `int i = 1;
while (i <= 5) {
    cout << i << " ";
    i++;
}`,
      },
    ],
    traps: [
      'Forgetting to increment the counter.',
      'Using = instead of == in the condition.',
      'Off-by-one: i < n vs i <= n.',
    ],
    memorize: [
      'Initialize → test → body → update → test again.',
      'while is a pre-test loop.',
      'Infinite loop = condition never fails.',
    ],
    mcqs: [
      { question: 'while is a:', options: ['Pre-test loop', 'Post-test loop', 'Function', 'Compiler'], correct: 0, explanation: 'Condition is tested before the body.' },
      { question: 'If the while condition is false at the start, the body runs:', options: ['Once', 'Forever', 'Zero times', 'Twice'], correct: 2, explanation: 'That is why Lecture 7 introduces do-while.' },
      { question: 'A missing i++ often causes:', options: ['Faster programs', 'An infinite loop', 'A linker error', 'Better comments'], correct: 1, explanation: 'The test never changes.' },
      { question: 'Which is the update step in i = 1; while (i<=n){... i++;} ?', options: ['i = 1', 'i <= n', 'i++', 'while'], correct: 2, explanation: 'Update moves the state toward termination.' },
      { question: 'Overflow means:', options: ['The disk is full of comments', 'A number exceeds the type’s range', 'main is missing', 'cin failed once'], correct: 1, explanation: 'Handout warning in Lecture 6.' },
      { question: 'while (0) { cout << "Hi"; } prints:', options: ['Hi', '0', 'nothing', 'Hi forever'], correct: 2, explanation: '0 is false.' },
      { question: 'Loops exist in programming because:', options: ['Work repeats for many records', 'C++ forbids if', 'Compilers require them', 'main cannot repeat'], correct: 0, explanation: 'Payroll, seasons, days — repetition is everywhere.' },
      { question: 'The braces of while group:', options: ['The condition only', 'The repeated body', 'All functions', 'Header files'], correct: 1, explanation: 'Without braces, only the next statement repeats.' },
      { question: 'int i=5; while(i>0){ i--; } ends with i equal to:', options: ['5', '1', '0', '-1'], correct: 2, explanation: 'Stops when i is 0.' },
      { question: 'while (true) is:', options: ['A syntax error', 'An infinite loop unless you break', 'A function prototype', 'Only for floats'], correct: 1, explanation: 'true never fails; you need break or return.' },
    ],
    outputGuess: [
      {
        title: 'Counting loop',
        code: `#include <iostream>
using namespace std;
int main() {
    int i = 1;
    while (i <= 3) {
        cout << i;
        i++;
    }
    return 0;
}`,
        options: ['123', '012', '12', '1233'],
        correct: 0,
        explanation: 'Prints 1 then 2 then 3.',
      },
    ],
    coding: [
      {
        title: 'Sum 1 to N',
        prompt: 'Read N and print the sum 1+2+...+N. For N=5 print 15.',
        starter: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    return 0;
}
`,
        stdin: '5',
        expected: '15',
        hint: 'Use a while loop and a running total.',
      },
    ],
  },
]
