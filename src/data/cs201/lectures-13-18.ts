import type { CsLecture } from './types'

export const lectures1318: CsLecture[] = [
  {
    id: 'cs-l13',
    number: '13',
    title: 'Arrays III — Manipulation and 2D Practice',
    shortTitle: 'Arrays III',
    videoId: 'PFAR4vfFQ8U',
    overview:
      'Lecture 13 processes arrays with nested loops. A 3×3 matrix is filled, then printed with the last row first. Think “array ⇒ loop” (and 2D ⇒ nested loop). Keep only similar data in one array.',
    takeaways: [
      'Process every element with a loop; process a matrix with two loops.',
      'Row and column subscripts are independent.',
      'Reverse-row output: walk the row index downward.',
    ],
    concepts: [
      { name: 'Array manipulation', definition: 'Reading, writing, transforming elements systematically.', explanation: 'Always ask: what is the index pattern?' },
      { name: 'Nested loops for 2D', definition: 'Outer loop = rows, inner loop = columns (or the reverse if you need it).', explanation: 'for i … for j … m[i][j]' },
    ],
    examples: [
      {
        title: 'Print last row first',
        code: `int m[3][3];
// fill m ...
for (int i = 2; i >= 0; i--) {
    for (int j = 0; j < 3; j++)
        cout << m[i][j] << " ";
    cout << "\\n";
}`,
      },
    ],
    traps: [
      'Swapping i and j accidentally.',
      'Starting the reverse loop at 3 instead of 2 for a 3×3.',
      'Mixing two kinds of data in one array.',
    ],
    memorize: [
      '2D → nested for.',
      'Last row of n rows is index n-1.',
      'Same context in one array.',
    ],
    mcqs: [
      { question: 'A 3×3 matrix last row has index:', options: ['3', '2', '0', '9'], correct: 1, explanation: '0,1,2.' },
      { question: 'Printing every cell of m[r][c] needs:', options: ['One if', 'Two nested loops typically', 'No loops', 'switch only'], correct: 1, explanation: 'Lecture 13 method.' },
      { question: 'Heights and ages should be stored:', options: ['In one array together', 'In two separate arrays', 'Only as characters', 'Inside main’s name'], correct: 1, explanation: 'Similar data only.' },
      { question: 'To walk rows from bottom to top:', options: ['i from 0 up', 'i from last index down to 0', 'j only', 'while(false)'], correct: 1, explanation: 'Handout exercise.' },
      { question: 'm[i][j] — i is usually the:', options: ['Column', 'Row', 'File', 'Function'], correct: 1, explanation: 'Row subscript first.' },
      { question: 'An off-by-one on the inner loop:', options: ['Is harmless', 'Skips or overruns a column', 'Renames the array', 'Stops cin forever'], correct: 1, explanation: 'j < 3 vs j <= 3.' },
      { question: 'The design recipe in L13 is applied to:', options: ['A real-world array problem', 'Only comments', 'Linking', 'OS design'], correct: 0, explanation: 'Analyze, examples, then code.' },
      { question: 'After filling a 2D array you often:', options: ['Throw it away', 'Traverse it again to compute or print', 'Convert it to void', 'Ban indexes'], correct: 1, explanation: 'Input pass, then process pass.' },
      { question: 'int m[3][3] contains how many values?', options: ['3', '6', '9', '33'], correct: 2, explanation: '3×3.' },
      { question: 'Nested loops run the inner body:', options: ['Once total', 'Once per outer × inner combination', 'Never', 'Only for i=0'], correct: 1, explanation: 'Cartesian product of indexes.' },
    ],
    outputGuess: [
      {
        title: 'Reverse rows',
        code: `#include <iostream>
using namespace std;
int main() {
    int m[2][2] = {{1,2},{3,4}};
    for (int i = 1; i >= 0; i--)
        cout << m[i][0];
    return 0;
}`,
        options: ['13', '31', '24', '12'],
        correct: 1,
        explanation: 'Row 1 col 0 is 3, then row 0 col 0 is 1 → 31.',
      },
    ],
    coding: [
      {
        title: 'Row sums',
        prompt: 'Read 4 integers as a 2×2 matrix (row-major). Print the two row sums on one line, separated by a space. Input 1 2 3 4 → 3 7',
        starter: `#include <iostream>
using namespace std;

int main() {
    int m[2][2];
    
    return 0;
}
`,
        stdin: '1 2 3 4',
        expected: '3 7',
      },
    ],
  },
  {
    id: 'cs-l14',
    number: '14',
    title: 'Pointers — Addresses and Call by Reference',
    shortTitle: 'Pointers',
    videoId: '4FT2tsN2vP4',
    overview:
      'Lecture 14: a pointer stores a memory address. Declare with *, point with &, dereference with * to reach the value. This is how C++ does call by reference and how bubble sort can swap in place.',
    takeaways: [
      'int *p; p holds the address of an int.',
      'p = &x; *p is the value at that address.',
      'void swap(int *a, int *b) can change the caller’s variables.',
    ],
    concepts: [
      { name: 'Pointer', definition: 'A variable that stores the address of another object.', explanation: 'Like a house address vs the house itself.' },
      { name: '& and *', definition: '&x is the address of x. *p is the object p points to.', explanation: 'They are inverses when used correctly.' },
      { name: 'Call by reference via pointers', definition: 'Pass &x so the function can write into x.', explanation: 'The handout’s swap / bubble-sort motivation.' },
    ],
    examples: [
      {
        title: 'Point and dereference',
        code: `int x = 10;
int *p = &x;
cout << *p; // 10
*p = 20;
cout << x;  // 20`,
      },
      {
        title: 'Swap with pointers',
        code: `void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}`,
      },
    ],
    traps: [
      'Dereferencing an uninitialized pointer (wild pointer).',
      'Writing *p = &x instead of p = &x.',
      'Forgetting that p and *p are different things.',
    ],
    memorize: [
      'p → address, *p → value.',
      '&x → address of x.',
      'Swap needs pointers (or later C++ references).',
    ],
    mcqs: [
      { question: 'A pointer stores:', options: ['Only text', 'A memory address', 'A compiler flag', 'A filename'], correct: 1, explanation: 'Lecture 14 definition.' },
      { question: '&x means:', options: ['Multiply x', 'Address of x', 'Delete x', 'x squared'], correct: 1, explanation: 'Address-of operator.' },
      { question: '*p when p points to x gives:', options: ['The address of p', 'The value of x', 'Always 0', 'main'], correct: 1, explanation: 'Dereference.' },
      { question: 'int *p = &n; the type of p is:', options: ['int', 'pointer to int', 'char', 'void'], correct: 1, explanation: 'int *.' },
      { question: 'Call by reference with pointers is used to:', options: ['Prevent all changes', 'Let a function modify the caller’s data', 'Hide main', 'Stop cin'], correct: 1, explanation: 'swap, sort.' },
      { question: 'Using * on a pointer that was never set is:', options: ['Safe', 'Undefined / dangerous', 'Required', 'A comment'], correct: 1, explanation: 'Wild pointer.' },
      { question: 'After int x=5; int *p=&x; *p=9; x is:', options: ['5', '9', 'address', '0'], correct: 1, explanation: 'Wrote through the pointer.' },
      { question: 'Bubble sort in this lecture is an excuse to:', options: ['Avoid arrays', 'Swap elements via pointers', 'Open files', 'Use switch'], correct: 1, explanation: 'Handout example 1.' },
      { question: 'The declaration int* p, q; makes:', options: ['Two pointers', 'p a pointer and q an int (classic gotcha)', 'Two ints', 'A 2D array'], correct: 1, explanation: '* binds to the name, not the type word alone.' },
      { question: 'p = &x is legal when:', options: ['p is a pointer to x’s type', 'p is a float and x is a file', 'p is main', 'p is #define'], correct: 0, explanation: 'Types must match.' },
    ],
    outputGuess: [
      {
        title: 'Dereference',
        code: `#include <iostream>
using namespace std;
int main() {
    int x = 4;
    int *p = &x;
    *p = *p + 3;
    cout << x;
    return 0;
}`,
        options: ['4', '3', '7', 'address'],
        correct: 2,
        explanation: 'x is updated through p: 4+3=7.',
      },
    ],
    coding: [
      {
        title: 'Swap two numbers',
        prompt: 'Read two integers and print them swapped, using a helper void swap(int *a, int *b). Input 3 8 → 8 3',
        starter: `#include <iostream>
using namespace std;

void swap(int *a, int *b) {
    
}

int main() {
    int x, y;
    cin >> x >> y;
    swap(&x, &y);
    cout << x << " " << y;
    return 0;
}
`,
        stdin: '3 8',
        expected: '8 3',
      },
    ],
  },
  {
    id: 'cs-l15',
    number: '15',
    title: 'Pointers, Strings, and Arrays Together',
    shortTitle: 'Pointers + arrays',
    videoId: 'Ji4_C-QXmoU',
    overview:
      'Lecture 15: the array name is a pointer to the first element. Pointer arithmetic (p+1) moves to the next element. You can compare pointers, and a C-string can be walked with a char*.',
    takeaways: [
      'a[i] is the same as *(a + i).',
      'p++ moves to the next object of p’s type, not the next byte.',
      'A string is a char array; a char* can scan it until \\0.',
    ],
    concepts: [
      { name: 'Array–pointer relationship', definition: 'The array name decays to &a[0].', explanation: 'That is why functions receive arrays as pointers.' },
      { name: 'Pointer arithmetic', definition: 'p+1, p-1, p++ step by sizeof(*p).', explanation: 'On int*, +1 skips 4 bytes on a typical 32-bit int.' },
      { name: 'Pointer comparison', definition: '== != < > on pointers to the same array.', explanation: 'Used to know whether you passed the last element.' },
    ],
    examples: [
      {
        title: 'Walk an array with a pointer',
        code: `int a[3] = {1,2,3};
int *p = a;
cout << *p << *(p+1) << *(p+2); // 123`,
      },
    ],
    traps: [
      'Adding 1 and expecting the next byte on an int*.',
      'Comparing pointers from two unrelated arrays.',
      'Walking a string and forgetting to stop at \\0.',
    ],
    memorize: [
      'a[i] ≡ *(a+i)',
      'Array name ≈ pointer to first element.',
      '++ on pointers is typed, not byte-wise.',
    ],
    mcqs: [
      { question: 'a[i] is equivalent to:', options: ['a + i', '*(a + i)', '&a', 'i[a] only in Java'], correct: 1, explanation: 'Definition in L15. (i[a] also works in C, but learn *(a+i).)' },
      { question: 'If p points to a[0], p+1 points to:', options: ['a[0]', 'a[1]', 'a[-1]', 'main'], correct: 1, explanation: 'Next element.' },
      { question: 'The name of array a in an expression is usually:', options: ['The last element', 'The address of a[0]', 'A copy of all data', 'void'], correct: 1, explanation: 'Decay to pointer.' },
      { question: 'Pointer comparison is meaningful when:', options: ['They point inside the same array (or one-past)', 'They are random', 'One is a float*', 'They are #define'], correct: 0, explanation: 'Same object sequence.' },
      { question: 'A C-string ends when the pointer sees:', options: ['space', '\\0', '9', 'EOF always'], correct: 1, explanation: 'Null terminator.' },
      { question: 'int *p = a; *p++ (postfix) typically:', options: ['Jumps two ints', 'Yields a[0] then moves p to a[1]', 'Deletes a', 'Compiles only'], correct: 1, explanation: 'Use then increment.' },
      { question: 'Why do array parameters look like pointers?', options: ['Because the address of the first cell is passed', 'Because arrays cannot exist', 'Because main forbids arrays', 'Because cout needs it'], correct: 0, explanation: 'L15 relationship.' },
      { question: 'p++ on char* moves:', options: ['4 bytes always', '1 byte (one char)', 'A whole string', 'Nothing'], correct: 1, explanation: 'sizeof(char) is 1.' },
      { question: 'Writing past the last element with p+n is:', options: ['Required', 'Undefined behavior', 'A comment', 'Call by value'], correct: 1, explanation: 'Stay in range.' },
      { question: 'cout << a when a is int[3] prints:', options: ['All three numbers automatically', 'Typically the address, not the values', 'Nothing ever', 'The word array'], correct: 1, explanation: 'Unlike char*, int* is not a string.' },
    ],
    outputGuess: [
      {
        title: 'Pointer offset',
        code: `#include <iostream>
using namespace std;
int main() {
    int a[3] = {8, 9, 10};
    cout << *(a + 2);
    return 0;
}`,
        options: ['8', '9', '10', '2'],
        correct: 2,
        explanation: 'a+2 is a[2] = 10.',
      },
    ],
    coding: [
      {
        title: 'Length of a word (C-string)',
        prompt: 'Read a single word into a char array and print how many letters it has (not counting \\0). Input hello → 5',
        starter: `#include <iostream>
using namespace std;

int main() {
    char s[100];
    cin >> s;
    
    return 0;
}
`,
        stdin: 'hello',
        expected: '5',
        hint: 'Walk with a pointer or index until s[i] == \'\\0\'.',
      },
    ],
  },
  {
    id: 'cs-l16',
    number: '16',
    title: 'Advanced Pointers — Pointers to Pointers',
    shortTitle: 'Pointers++',
    videoId: 'v2pkDz4V6go',
    overview:
      'Lecture 16 continues pointers: char myName[] = "Full Name" vs char *p = "…", multi-dimensional arrays in memory, pointers to pointers, and a first mention of command-line arguments (argv is char**).',
    takeaways: [
      'A 2D array is stored row-by-row in memory.',
      'char **pp is a pointer to a pointer to char.',
      'main(int argc, char *argv[]) receives command-line words.',
    ],
    concepts: [
      { name: 'Array vs pointer to string', definition: 'char s[] copies characters into a writable array. char *p may point at a constant string.', explanation: 'Do not write through a pointer to a string literal.' },
      { name: 'Pointer to pointer', definition: 'int **q; q points to an int*.', explanation: 'Needed for arrays of pointers and argv.' },
      { name: 'Command-line arguments', definition: 'argc = how many tokens; argv[0] is the program name; argv[1] is the first user word.', explanation: 'VU introduces this as a pointer-to-pointer application.' },
    ],
    examples: [
      {
        title: 'argv idea',
        code: `// run: program Ali 20
// argc is 3
// argv[1] is "Ali"`,
      },
    ],
    traps: [
      'Modifying a string literal through char*.',
      'Confusing argv[0] with the first user argument.',
      'Thinking a 2D array and int** are the same type.',
    ],
    memorize: [
      'argv is char *argv[] or char **argv.',
      'argc counts the tokens including the program name.',
      'Row-major layout for 2D arrays.',
    ],
    mcqs: [
      { question: 'char name[] = "Ali"; creates:', options: ['Only a pointer', 'A writable array with A,l,i,\\0', 'An int', 'A file'], correct: 1, explanation: 'L16 opening example.' },
      { question: 'argv is best thought of as:', options: ['int', 'An array of C-strings (pointer to pointer)', 'A float', 'A loop'], correct: 1, explanation: 'char**.' },
      { question: 'If you run app.exe one two, argc is:', options: ['2', '3', '1', '0'], correct: 1, explanation: 'Program name + two words.' },
      { question: 'argv[0] is usually:', options: ['The first user argument', 'The program name / path', 'Always empty', 'argc'], correct: 1, explanation: 'Standard convention.' },
      { question: 'int **p means:', options: ['Pointer to int', 'Pointer to pointer to int', '2D array type-identical', 'void function'], correct: 1, explanation: 'Two stars.' },
      { question: 'A 2D array in memory is typically:', options: ['Column-major only in C++', 'Row-major (rows laid out one after another)', 'Random', 'On disk only'], correct: 1, explanation: 'Lecture 16.' },
      { question: 'Writing to a string literal via char* is:', options: ['Recommended', 'Undefined / dangerous', 'Required for cin', 'How main works'], correct: 1, explanation: 'Use a char array if you will change letters.' },
      { question: 'Pointers to pointers show up when:', options: ['You have an array of pointers', 'You print Hello', 'You add two ints', 'You close a file'], correct: 0, explanation: 'And with argv.' },
      { question: 'name in char name[] can be used as:', options: ['A pointer to the first character', 'An int automatically', 'A switch', 'argc'], correct: 0, explanation: 'Same relationship as L15.' },
      { question: 'Command-line arguments are received by:', options: ['cout', 'main’s parameters', 'the linker only', '#define'], correct: 1, explanation: 'int main(int argc, char *argv[]).' },
    ],
    outputGuess: [
      {
        title: 'Array of pointers idea',
        code: `#include <iostream>
using namespace std;
int main() {
    const char *w[] = {"on", "off"};
    cout << w[1][1];
    return 0;
}`,
        options: ['o', 'f', 'n', 'off'],
        correct: 1,
        explanation: 'w[1] is "off", index 1 is \'f\'.',
      },
    ],
    coding: [
      {
        title: 'Count vowels in a word',
        prompt: 'Read a lowercase word and print how many vowels (a e i o u) it contains. Input programming → 3',
        starter: `#include <iostream>
using namespace std;

int main() {
    char s[100];
    cin >> s;
    
    return 0;
}
`,
        stdin: 'programming',
        expected: '3',
      },
    ],
  },
  {
    id: 'cs-l17',
    number: '17',
    title: 'String and Character Functions',
    shortTitle: 'String functions',
    videoId: 'vTXqC-XeWN4',
    overview:
      'Lecture 17 is the library toolkit: string length/copy/compare/concat, character tests (isdigit, isalpha), conversions (atoi), and search helpers. On this lab we use <cstring> and <cctype> (modern headers).',
    takeaways: [
      'strlen, strcpy, strcat, strcmp live in <cstring>.',
      'strcmp returns 0 when the strings are equal.',
      'Always give strcpy/strcat a destination big enough.',
    ],
    concepts: [
      { name: 'strlen', definition: 'Number of characters before \\0.', explanation: 'strlen("Hi") is 2.' },
      { name: 'strcpy / strcat', definition: 'Copy or append C-strings into a destination buffer.', explanation: 'Destination must have room.' },
      { name: 'strcmp', definition: 'Lexicographic compare; 0 means equal.', explanation: 'if (strcmp(a,b)==0) they match.' },
      { name: 'Character functions', definition: 'isalpha, isdigit, tolower, toupper in <cctype>.', explanation: 'Test or convert one char.' },
    ],
    examples: [
      {
        title: 'Compare and copy',
        code: `#include <cstring>
char a[20] = "VU";
char b[20];
strcpy(b, a);
strcat(b, "-CS201");
// b is "VU-CS201"
if (strcmp(a, "VU") == 0) { /* equal */ }`,
      },
    ],
    traps: [
      'Using == to compare C-string contents.',
      'strcat into a buffer that is too small.',
      'Forgetting that strlen does not count \\0.',
    ],
    memorize: [
      'strcmp == 0 → equal.',
      'strlen("Ali") → 3.',
      'strcpy(dest, src).',
    ],
    mcqs: [
      { question: 'strlen("CS201") is:', options: ['4', '5', '6', '0'], correct: 1, explanation: 'Five letters, null not counted.' },
      { question: 'strcmp("A","A") returns:', options: ['1', '0', '-1', 'A'], correct: 1, explanation: 'Equal strings.' },
      { question: 'strcpy(d, s) copies:', options: ['s into d including \\0', 'd into s', 'Only one char', 'The executable'], correct: 0, explanation: 'Destination first.' },
      { question: 'strcat appends:', options: ['A file', 'src onto the end of dest', 'dest onto src always illegally', 'main'], correct: 1, explanation: 'Concatenate.' },
      { question: 'isdigit(\'7\') is:', options: ['false', 'true (nonzero)', '7', 'a pointer'], correct: 1, explanation: 'Character classification.' },
      { question: 'To compare contents of two C-strings use:', options: ['==', 'strcmp', '=', 'cin'], correct: 1, explanation: '== compares addresses.' },
      { question: '<cstring> in modern C++ replaces the old:', options: ['math.h only', 'string.h', 'fstream', 'vector'], correct: 1, explanation: 'Same functions, C++ header name.' },
      { question: 'tolower(\'B\') yields:', options: ['B', 'b', '2', '0'], correct: 1, explanation: 'Case conversion.' },
      { question: 'A buffer overflow with strcpy happens when:', options: ['dest is too small', 'src is empty', 'you use strlen', 'you include the header'], correct: 0, explanation: 'No bounds check in classic strcpy.' },
      { question: 'atoi converts:', options: ['A string of digits to an int', 'An int to a pointer', 'A file to a char', 'main to void'], correct: 0, explanation: 'String conversion functions in L17.' },
    ],
    outputGuess: [
      {
        title: 'strlen',
        code: `#include <iostream>
#include <cstring>
using namespace std;
int main() {
    cout << strlen("UET");
    return 0;
}`,
        options: ['2', '3', '4', '0'],
        correct: 1,
        explanation: 'U,E,T → 3.',
      },
    ],
    coding: [
      {
        title: 'Are two words equal?',
        prompt: 'Read two words. Print Equal if they are the same, otherwise Different. Input vu vu → Equal',
        starter: `#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char a[100], b[100];
    cin >> a >> b;
    
    return 0;
}
`,
        stdin: 'vu vu',
        expected: 'Equal',
        hint: 'strcmp(a,b)==0',
      },
    ],
  },
  {
    id: 'cs-l18',
    number: '18',
    title: 'File Handling',
    shortTitle: 'Files',
    videoId: '7X7mtvCnWTc',
    overview:
      'Lecture 18: memory is volatile, so payroll data must live in files. Text files store readable characters. C++ uses ifstream to read and ofstream to write (VU also shows FILE* style in some talks). Always open, check, use, then close.',
    takeaways: [
      'ofstream out("data.txt"); out << value;',
      'ifstream in("data.txt"); in >> value;',
      'If the file does not open, say so — do not pretend the data is there.',
    ],
    concepts: [
      { name: 'Why files', definition: 'Disk storage survives after the program (and power) stops.', explanation: 'Enter employee names once; reuse them every month.' },
      { name: 'Text vs executable', definition: 'Text files are readable characters; .exe files are machine code.', explanation: 'Your .cpp and a novel are text; a compiled program is not.' },
      { name: 'Streams', definition: 'ofstream for output to a file, ifstream for input from a file.', explanation: 'Same << and >> you already use with cout/cin.' },
    ],
    examples: [
      {
        title: 'Write then read a number',
        code: `#include <fstream>
using namespace std;
int main() {
    ofstream out("n.txt");
    out << 42;
    out.close();

    int x;
    ifstream in("n.txt");
    in >> x;
    in.close();
}`,
        note: 'The in-browser lab cannot create real disk files. Practice the syntax here; run file programs in Dev-C++ on your PC.',
      },
    ],
    traps: [
      'Forgetting to close a file (or letting a destructor do it without thinking).',
      'Reading a file you never successfully opened.',
      'Assuming the file path is the same on every machine.',
    ],
    memorize: [
      'ofstream = write, ifstream = read.',
      'Open → use → close.',
      'Data in RAM disappears; files keep it.',
    ],
    mcqs: [
      { question: 'We use files mainly because:', options: ['RAM is permanent', 'Memory is volatile and data must persist', 'C++ forbids arrays', 'main cannot print'], correct: 1, explanation: 'Payroll motivation in the handout.' },
      { question: 'ofstream is used to:', options: ['Read a file', 'Write a file', 'Sort an array', 'Define pi'], correct: 1, explanation: 'Output file stream.' },
      { question: 'ifstream is used to:', options: ['Write a file', 'Read a file', 'Compile', 'Link'], correct: 1, explanation: 'Input file stream.' },
      { question: 'A .txt file is typically:', options: ['An executable', 'A text file', 'A pointer', 'A header only'], correct: 1, explanation: 'Readable characters.' },
      { question: 'After writing you should:', options: ['Delete Windows', 'close() the stream (or let it close cleanly)', 'Never save', 'Call argv'], correct: 1, explanation: 'Flush and release the file.' },
      { question: 'If open fails, a good program:', options: ['Ignores it', 'Detects it and reports an error', 'Reboots', 'Uses switch on argc'], correct: 1, explanation: 'if (!in) …' },
      { question: 'cout is to the screen as ofstream is to the:', options: ['Keyboard', 'Disk file', 'CPU cache only', 'Linker'], correct: 1, explanation: 'Same insertion operator, different destination.' },
      { question: 'Employee names for monthly payroll should be:', options: ['Typed every month', 'Stored in a file and reused', 'Kept only in comments', 'Put in argv always'], correct: 1, explanation: 'Lecture 18 story.' },
      { question: 'Executable program files contain:', options: ['Only English essays', 'Machine code to run', 'Only comments', 'Only headers'], correct: 1, explanation: 'Contrast with text files.' },
      { question: '<fstream> provides:', options: ['sqrt', 'ifstream and ofstream', 'strlen', 'switch'], correct: 1, explanation: 'File stream header.' },
    ],
    outputGuess: [
      {
        title: 'Stream operators (same as cout)',
        code: `#include <iostream>
using namespace std;
int main() {
    int id = 201;
    cout << "CS" << id;
    return 0;
}`,
        options: ['CS 201', 'CS201', '201CS', 'CS'],
        correct: 1,
        explanation: 'File output uses the same << chaining. No extra space was inserted.',
      },
    ],
    coding: [
      {
        title: 'Format a saved record',
        prompt: 'Files are for later — here, simulate one record: read an id and a mark, print id:mark with no spaces. Input 12 95 → 12:95',
        starter: `#include <iostream>
using namespace std;

int main() {
    int id, mark;
    cin >> id >> mark;
    
    return 0;
}
`,
        stdin: '12 95',
        expected: '12:95',
      },
    ],
  },
]
