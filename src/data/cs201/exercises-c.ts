import type { CodingChallenge, OutputGuess } from './types'

const io = `#include <iostream>
using namespace std;
`

function main(body: string) {
  return `${io}int main() {
${body}
    return 0;
}`
}

function q(title: string, body: string, options: string[], correct: number, explanation: string): OutputGuess {
  return { title, code: main(body), options, correct, explanation }
}

export const exercisesC: Record<string, { outputGuess: OutputGuess[]; coding: CodingChallenge[] }> = {
  'cs-l11': {
    outputGuess: [
      q('Indexes', '    int a[3] = {4, 5, 6};\n    cout << a[0] + a[2];', ['4', '9', '10', '15'], 2, '4+6=10.'),
      q('Middle', '    int a[4] = {1, 8, 3, 2};\n    cout << a[1];', ['1', '8', '3', '2'], 1, 'Index 1 is 8.'),
      q('Last valid', '    int a[3] = {9, 7, 5};\n    cout << a[2];', ['9', '7', '5', 'error'], 2, 'Last index is 2.'),
      q('Sum loop', '    int a[3] = {2, 2, 2}, s = 0;\n    for (int i = 0; i < 3; i++) s += a[i];\n    cout << s;', ['2', '6', '222', '3'], 1, '2+2+2.'),
      q('Overwrite', '    int a[2] = {1, 2};\n    a[0] = 9;\n    cout << a[0] << a[1];', ['12', '92', '91', '29'], 1, 'First became 9.'),
      q('Size 1', '    int a[] = {17};\n    cout << a[0];', ['0', '17', '1', 'error'], 1, 'Single element.'),
      q('Copy by loop', '    int a[2] = {3, 4}, b[2];\n    for (int i = 0; i < 2; i++) b[i] = a[i];\n    cout << b[1];', ['3', '4', '0', '7'], 1, 'Copied 4.'),
      q('Linear find', '    int a[4] = {4, 9, 1, 6};\n    int p = -1;\n    for (int i = 0; i < 4; i++) if (a[i] == 1) p = i;\n    cout << p;', ['-1', '2', '1', '4'], 1, '1 sits at index 2.'),
      q('Init zeros leftover', '    int a[3] = {5};\n    cout << a[0] << a[1];', ['55', '50', '5', '00'], 1, 'Rest become 0.'),
      q('Reverse print', '    int a[3] = {1, 2, 3};\n    for (int i = 2; i >= 0; i--) cout << a[i];', ['123', '321', '12', '3'], 1, 'From the end.'),
    ],
    coding: [
      {
        title: 'Sum of 4',
        prompt: 'Read 4 integers into an array and print the sum. Input 1 2 3 4 → 10',
        starter: `${io}int main() {\n    int a[4];\n    \n    return 0;\n}\n`,
        stdin: '1 2 3 4',
        expected: '10',
      },
      {
        title: 'Count evens',
        prompt: 'Read 5 integers. Print how many are even. Input 1 2 3 4 6 → 3',
        starter: `${io}int main() {\n    int a[5];\n    \n    return 0;\n}\n`,
        stdin: '1 2 3 4 6',
        expected: '3',
      },
      {
        title: 'Linear search index',
        prompt: 'Read 5 integers, then a key. Print the first index of key, or -1. Input 4 9 1 7 3 7 → 3',
        starter: `${io}int main() {\n    int a[5], key;\n    \n    return 0;\n}\n`,
        stdin: '4 9 1 7 3 7',
        expected: '3',
      },
    ],
  },
  'cs-l12': {
    outputGuess: [
      q('2D element', '    int m[2][2] = {{1, 2}, {3, 4}};\n    cout << m[1][1];', ['1', '2', '3', '4'], 3, 'Row 1 col 1 is 4.'),
      q('First row', '    int m[2][2] = {{9, 8}, {7, 6}};\n    cout << m[0][1];', ['9', '8', '7', '6'], 1, 'First row, second col.'),
      q('C-string print', '    char s[] = "Hi";\n    cout << s;', ['H', 'Hi', 'Hi\\0', 'error'], 1, 'Prints until null.'),
      q('Char index', '    char s[] = "VU";\n    cout << s[1];', ['V', 'U', 'VU', '\\0'], 1, 'Index 1 is U.'),
      q('Length by hand', '    char s[] = "Ali";\n    int n = 0;\n    while (s[n] != \'\\0\') n++;\n    cout << n;', ['3', '4', '0', 'Ali'], 0, 'Three letters.'),
      q('2D sum one row', '    int m[2][2] = {{1, 2}, {3, 4}};\n    cout << m[0][0] + m[0][1];', ['3', '7', '1', '6'], 0, '1+2.'),
      q('Overwrite letter', '    char s[] = "bat";\n    s[0] = \'c\';\n    cout << s;', ['bat', 'cat', 'c', 'error'], 1, 'Writable array.'),
      q('Compare addresses? we print letters', '    char a[] = "ab";\n    cout << a[0] << a[1];', ['ab', 'a', 'b', 'address'], 0, 'Two characters.'),
      q('3 cells', '    int m[1][3] = {{5, 6, 7}};\n    cout << m[0][2];', ['5', '6', '7', '2'], 2, 'Third column.'),
      q('Null size', '    char s[] = "A";\n    cout << int(s[1] == \'\\0\');', ['0', '1', 'A', '2'], 1, 'True is 1.'),
    ],
    coding: [
      {
        title: 'Largest of 5',
        prompt: 'Read 5 integers and print the largest. Input 4 9 1 7 3 → 9',
        starter: `${io}int main() {\n    int a[5];\n    \n    return 0;\n}\n`,
        stdin: '4 9 1 7 3',
        expected: '9',
      },
      {
        title: 'String length',
        prompt: 'Read a word and print its length. Input hello → 5',
        starter: `${io}int main() {\n    char s[100];\n    cin >> s;\n    \n    return 0;\n}\n`,
        stdin: 'hello',
        expected: '5',
      },
      {
        title: '2x2 total',
        prompt: 'Read 4 ints as 2x2 and print the sum of all. Input 1 2 3 4 → 10',
        starter: `${io}int main() {\n    int m[2][2];\n    \n    return 0;\n}\n`,
        stdin: '1 2 3 4',
        expected: '10',
      },
    ],
  },
  'cs-l13': {
    outputGuess: [
      q('Reverse rows col0', '    int m[2][2] = {{1, 2}, {3, 4}};\n    for (int i = 1; i >= 0; i--) cout << m[i][0];', ['13', '31', '24', '12'], 1, '3 then 1.'),
      q('All cells', '    int m[2][2] = {{1, 2}, {3, 4}};\n    for (int i = 0; i < 2; i++)\n        for (int j = 0; j < 2; j++) cout << m[i][j];', ['1234', '1324', '13', '24'], 0, 'Row-major.'),
      q('Column 1', '    int m[2][2] = {{1, 2}, {3, 4}};\n    cout << m[0][1] << m[1][1];', ['13', '24', '12', '34'], 1, '2 and 4.'),
      q('Last row first full', '    int m[2][2] = {{1, 2}, {3, 4}};\n    for (int j = 0; j < 2; j++) cout << m[1][j];', ['12', '34', '14', '32'], 1, 'Bottom row.'),
      q('Nested counts', '    int c = 0;\n    for (int i = 0; i < 3; i++)\n        for (int j = 0; j < 2; j++) c++;\n    cout << c;', ['3', '2', '5', '6'], 3, '3*2=6 visits.'),
      q('Diagonal', '    int m[2][2] = {{9, 1}, {2, 8}};\n    cout << m[0][0] + m[1][1];', ['10', '17', '3', '11'], 1, '9+8.'),
      q('Change one', '    int m[2][2] = {{1, 1}, {1, 1}};\n    m[1][0] = 5;\n    cout << m[1][0];', ['1', '5', '0', '2'], 1, 'That cell is 5.'),
      q('Row sums idea', '    int m[2][2] = {{1, 2}, {3, 4}};\n    cout << (m[0][0]+m[0][1]) << " " << (m[1][0]+m[1][1]);', ['3 7', '1 2', '4 6', '10 0'], 0, '3 and 7.'),
      q('Walk j only', '    int m[3][1] = {{2},{4},{6}};\n    for (int i = 0; i < 3; i++) cout << m[i][0];', ['246', '2', '642', '3'], 0, 'Column vector.'),
      q('Off-by-one avoided', '    int a[3] = {7, 8, 9};\n    for (int i = 0; i < 3; i++) cout << a[i];', ['789', '78', '7890', '7'], 0, 'i < 3 is correct.'),
    ],
    coding: [
      {
        title: 'Row sums',
        prompt: 'Read 4 ints as 2x2. Print the two row sums. Input 1 2 3 4 → 3 7',
        starter: `${io}int main() {\n    int m[2][2];\n    \n    return 0;\n}\n`,
        stdin: '1 2 3 4',
        expected: '3 7',
      },
      {
        title: 'Last row first',
        prompt: 'Read 4 ints as 2x2. Print last row then first row, spaces between numbers. Input 1 2 3 4 → 3 4 1 2',
        starter: `${io}int main() {\n    int m[2][2];\n    \n    return 0;\n}\n`,
        stdin: '1 2 3 4',
        expected: '3 4 1 2',
      },
      {
        title: 'Diagonal sum',
        prompt: 'Read 4 ints as 2x2. Print m[0][0]+m[1][1]. Input 5 1 2 7 → 12',
        starter: `${io}int main() {\n    int m[2][2];\n    \n    return 0;\n}\n`,
        stdin: '5 1 2 7',
        expected: '12',
      },
    ],
  },
  'cs-l14': {
    outputGuess: [
      q('Deref write', '    int x = 4;\n    int *p = &x;\n    *p = *p + 3;\n    cout << x;', ['4', '3', '7', 'address'], 2, 'x updated through p.'),
      q('Print star', '    int x = 11;\n    int *p = &x;\n    cout << *p;', ['address', '11', '0', 'p'], 1, '*p is the value.'),
      q('Two names', '    int x = 2;\n    int *p = &x;\n    int *q = p;\n    *q = 8;\n    cout << x;', ['2', '8', 'address', '0'], 1, 'q points at the same x.'),
      q('Swap idea', '    int a = 3, b = 5, t = a;\n    a = b; b = t;\n    cout << a << " " << b;', ['3 5', '5 3', '3 3', '5 5'], 1, 'Classic swap.'),
      { title: 'Pointer parameter', code: `${io}void set(int *p) { *p = 9; }\nint main() {\n    int x = 1;\n    set(&x);\n    cout << x;\n    return 0;\n}`, options: ['1', '9', 'address', '0'], correct: 1, explanation: 'Call by reference via pointer.' },
      q('Address not printed here', '    int x = 6;\n    int *p = &x;\n    cout << (*p) * 2;', ['12', '6', 'address', '2'], 0, '6*2.'),
      q('Null not used', '    int x = 0;\n    int *p = &x;\n    cout << *p;', ['garbage', '0', 'address', 'error'], 1, 'x is 0.'),
      q('Increment value', '    int x = 10;\n    int *p = &x;\n    (*p)++;\n    cout << x;', ['10', '11', 'address', 'error'], 1, 'Parentheses: increment the int.'),
      q('Re-point', '    int a = 1, b = 4;\n    int *p = &a;\n    p = &b;\n    cout << *p;', ['1', '4', '14', 'address'], 1, 'p now points to b.'),
      q('Both after swap fn style', '    int x = 1, y = 2;\n    int t = x; x = y; y = t;\n    cout << x << y;', ['12', '21', '11', '22'], 1, 'Now 2 then 1.'),
    ],
    coding: [
      {
        title: 'Swap with pointers',
        prompt: 'Read two ints and print them swapped using void swap(int *a, int *b). Input 3 8 → 8 3',
        starter: `${io}void swap(int *a, int *b) {\n    \n}\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    swap(&x, &y);\n    cout << x << " " << y;\n    return 0;\n}\n`,
        stdin: '3 8',
        expected: '8 3',
      },
      {
        title: 'Add one through pointer',
        prompt: 'Read n. A function void addOne(int *p) should add 1 to it. Print the new value. Input 20 → 21',
        starter: `${io}void addOne(int *p) {\n    \n}\n\nint main() {\n    int n;\n    cin >> n;\n    addOne(&n);\n    cout << n;\n    return 0;\n}\n`,
        stdin: '20',
        expected: '21',
      },
      {
        title: 'Point and print',
        prompt: 'Read n, point a pointer at it, print *p. Input 44 → 44',
        starter: `${io}int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n`,
        stdin: '44',
        expected: '44',
      },
    ],
  },
  'cs-l15': {
    outputGuess: [
      q('Offset', '    int a[3] = {8, 9, 10};\n    cout << *(a + 2);', ['8', '9', '10', '2'], 2, 'a+2 is a[2].'),
      q('a[i] form', '    int a[3] = {8, 9, 10};\n    cout << a[1];', ['8', '9', '10', '1'], 1, 'Same as *(a+1).'),
      q('Walk pointer', '    int a[3] = {1, 2, 3};\n    int *p = a;\n    cout << *p << *(p + 1);', ['12', '11', '23', '13'], 0, 'First two cells.'),
      q('p++', '    int a[3] = {4, 5, 6};\n    int *p = a;\n    p++;\n    cout << *p;', ['4', '5', '6', 'address'], 1, 'Moved to the next int.'),
      q('String walk', '    char s[] = "OK";\n    char *p = s;\n    cout << *p << *(p + 1);', ['OK', 'O', 'K', 'KO'], 0, 'O then K.'),
      q('Until null count', '    char s[] = "hey";\n    char *p = s;\n    int n = 0;\n    while (*p) { n++; p++; }\n    cout << n;', ['3', '4', '0', 'hey'], 0, 'Three letters.'),
      q('a+0', '    int a[2] = {7, 1};\n    cout << *a;', ['7', '1', 'address', '0'], 0, '*a is a[0].'),
      q('Same memory', '    int a[2] = {2, 9};\n    int *p = a;\n    p[1] = 0;\n    cout << a[1];', ['9', '0', '2', '1'], 1, 'p[1] is a[1].'),
      q('Compare pointers', '    int a[2] = {1, 2};\n    int *p = a, *q = a + 1;\n    cout << (q > p);', ['0', '1', '2', 'error'], 1, 'q is further along: true.'),
      q('Not a string', '    int a[2] = {1, 2};\n    cout << a[0] << a[1];', ['address', '12', '1', '2'], 1, 'Print the ints yourself.'),
    ],
    coding: [
      {
        title: 'Word length with pointer',
        prompt: 'Read a word. Print its length using a char*. Input hello → 5',
        starter: `${io}int main() {\n    char s[100];\n    cin >> s;\n    \n    return 0;\n}\n`,
        stdin: 'hello',
        expected: '5',
      },
      {
        title: 'Third element via pointer',
        prompt: 'Read 4 ints. Print the third using *(a+2). Input 9 8 7 6 → 7',
        starter: `${io}int main() {\n    int a[4];\n    \n    return 0;\n}\n`,
        stdin: '9 8 7 6',
        expected: '7',
      },
      {
        title: 'Sum with pointer',
        prompt: 'Read 3 ints. Sum them with a pointer walk. Input 2 2 2 → 6',
        starter: `${io}int main() {\n    int a[3];\n    \n    return 0;\n}\n`,
        stdin: '2 2 2',
        expected: '6',
      },
    ],
  },
  'cs-l16': {
    outputGuess: [
      q('Array of pointers char', '    const char *w[] = {"on", "off"};\n    cout << w[1][1];', ['o', 'f', 'n', 'off'], 1, 'off[1] is f.'),
      q('First word first letter', '    const char *w[] = {"on", "off"};\n    cout << w[0][0];', ['o', 'n', 'f', 'on'], 0, 'on[0].'),
      q('Second word', '    const char *w[] = {"CS", "201"};\n    cout << w[1];', ['CS', '201', '2', 'C'], 1, 'C-string at index 1.'),
      q('argc idea simulated', '    int argc = 3;\n    cout << argc - 1;', ['3', '2', '1', '0'], 1, 'Two user args besides the program name.'),
      q('Writable copy', '    char name[] = "Ali";\n    name[0] = \'a\';\n    cout << name;', ['Ali', 'ali', 'a', 'error'], 1, 'The array is writable, so A becomes a.'),
      q('Change last letter', '    char name[] = "Ali";\n    name[2] = \'x\';\n    cout << name;', ['Ali', 'Alx', 'x', 'error'], 1, 'Writable array.'),
      q('Pointer to pointer value', '    int x = 5;\n    int *p = &x;\n    int **q = &p;\n    cout << **q;', ['address', '5', 'error', '0'], 1, 'Two stars get x.'),
      q('Change through **', '    int x = 1;\n    int *p = &x;\n    int **q = &p;\n    **q = 4;\n    cout << x;', ['1', '4', 'address', '0'], 1, 'Writes x.'),
      q('Row-major index', '    int m[2][2] = {{1, 2}, {3, 4}};\n    cout << *(*(m + 1) + 0);', ['1', '2', '3', '4'], 2, 'Row 1 col 0.'),
      q('argv[0] is program — we print a stand-in', '    const char *argv0 = "app";\n    cout << argv0[0];', ['a', 'app', '0', 'error'], 0, 'First character of the program name.'),
    ],
    coding: [
      {
        title: 'Count vowels',
        prompt: 'Read a lowercase word. Print vowel count (a e i o u). Input programming → 3',
        starter: `${io}int main() {\n    char s[100];\n    cin >> s;\n    \n    return 0;\n}\n`,
        stdin: 'programming',
        expected: '3',
      },
      {
        title: 'First letters',
        prompt: 'Read two words. Print the first letter of each with no space. Input virtual university → vu',
        starter: `${io}int main() {\n    char a[50], b[50];\n    cin >> a >> b;\n    \n    return 0;\n}\n`,
        stdin: 'virtual university',
        expected: 'vu',
      },
      {
        title: 'Double pointer print',
        prompt: 'Read n. Using int *p = &n; int **q = &p; print **q. Input 18 → 18',
        starter: `${io}int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n`,
        stdin: '18',
        expected: '18',
      },
    ],
  },
  'cs-l17': {
    outputGuess: [
      { title: 'strlen', code: `#include <iostream>\n#include <cstring>\nusing namespace std;\nint main() {\n    cout << strlen("UET");\n    return 0;\n}`, options: ['2', '3', '4', '0'], correct: 1, explanation: 'U,E,T.' },
      { title: 'strcmp equal', code: `#include <iostream>\n#include <cstring>\nusing namespace std;\nint main() {\n    cout << (strcmp("A", "A") == 0);\n    return 0;\n}`, options: ['0', '1', '-1', 'A'], correct: 1, explanation: 'Equal → 0 → true → 1.' },
      { title: 'strcpy then print', code: `#include <iostream>\n#include <cstring>\nusing namespace std;\nint main() {\n    char b[20];\n    strcpy(b, "VU");\n    cout << b;\n    return 0;\n}`, options: ['VU', 'b', 'empty', 'error'], correct: 0, explanation: 'Copied into b.' },
      { title: 'strcat', code: `#include <iostream>\n#include <cstring>\nusing namespace std;\nint main() {\n    char b[20] = "CS";\n    strcat(b, "201");\n    cout << b;\n    return 0;\n}`, options: ['CS', '201', 'CS201', 'error'], correct: 2, explanation: 'Concatenate.' },
      { title: 'strlen empty', code: `#include <iostream>\n#include <cstring>\nusing namespace std;\nint main() {\n    cout << strlen("");\n    return 0;\n}`, options: ['1', '0', '-1', 'error'], correct: 1, explanation: 'No letters.' },
      { title: 'isdigit', code: `#include <iostream>\n#include <cctype>\nusing namespace std;\nint main() {\n    cout << (isdigit('7') ? 1 : 0);\n    return 0;\n}`, options: ['0', '1', '7', 'true'], correct: 1, explanation: '7 is a digit.' },
      { title: 'isalpha false', code: `#include <iostream>\n#include <cctype>\nusing namespace std;\nint main() {\n    cout << (isalpha('7') ? 1 : 0);\n    return 0;\n}`, options: ['1', '0', '7', 'error'], correct: 1, explanation: '7 is not a letter.' },
      { title: 'tolower', code: `#include <iostream>\n#include <cctype>\nusing namespace std;\nint main() {\n    cout << char(tolower('B'));\n    return 0;\n}`, options: ['B', 'b', '2', '66'], correct: 1, explanation: 'Lowercase b.' },
      { title: 'strcmp order', code: `#include <iostream>\n#include <cstring>\nusing namespace std;\nint main() {\n    cout << (strcmp("A", "B") < 0);\n    return 0;\n}`, options: ['0', '1', 'A', 'B'], correct: 1, explanation: 'A comes before B.' },
      { title: 'char after copy', code: `#include <iostream>\n#include <cstring>\nusing namespace std;\nint main() {\n    char a[8] = "mid";\n    char b[8];\n    strcpy(b, a);\n    cout << b[2];\n    return 0;\n}`, options: ['m', 'i', 'd', '\\0'], correct: 2, explanation: 'Third letter.' },
    ],
    coding: [
      {
        title: 'Equal words?',
        prompt: 'Read two words. Print Equal or Different. Input vu vu → Equal',
        starter: `#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char a[100], b[100];\n    cin >> a >> b;\n    \n    return 0;\n}\n`,
        stdin: 'vu vu',
        expected: 'Equal',
        hint: 'strcmp(a,b)==0',
      },
      {
        title: 'Join codes',
        prompt: 'Read two short words. Print them concatenated (strcpy + strcat into a result). Input CS 201 → CS201',
        starter: `#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char a[20], b[20], c[40];\n    cin >> a >> b;\n    \n    return 0;\n}\n`,
        stdin: 'CS 201',
        expected: 'CS201',
      },
      {
        title: 'Count digits in a word',
        prompt: 'Read a token. Print how many digits it contains. Input cs201 → 3',
        starter: `#include <iostream>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    char s[100];\n    cin >> s;\n    \n    return 0;\n}\n`,
        stdin: 'cs201',
        expected: '3',
      },
    ],
  },
  'cs-l18': {
    outputGuess: [
      q('Same as file <<', '    int id = 201;\n    cout << "CS" << id;', ['CS 201', 'CS201', '201CS', 'CS'], 1, 'File streams use the same <<.'),
      q('Colon record', '    cout << 12 << ":" << 95;', ['12:95', '12 : 95', '1295', '12 95'], 0, 'No extra spaces.'),
      q('Two fields', '    cout << "Ali" << " " << 20000;', ['Ali20000', 'Ali 20000', '20000 Ali', 'error'], 1, 'Space is in the middle string.'),
      q('Open-fail idea simulated', '    bool ok = false;\n    if (!ok) cout << "error";\n    else cout << "ready";', ['ready', 'error', 'nothing', 'false'], 1, 'Always check the stream.'),
      q('Write then read in RAM', '    int saved = 42;\n    int x = saved;\n    cout << x;', ['42', '0', 'error', 'x'], 0, 'Files do this on disk.'),
      q('Newline in a report', '    cout << "id\\nmark";', ['id mark', 'idmark', 'id then mark on two lines', 'id\\nmark'], 2, 'Looks like two lines in a text file too.'),
      q('Append lookalike', '    cout << "pay";\n    cout << "roll";', ['pay roll', 'payroll', 'rollpay', 'pay'], 1, 'Second write continues the stream.'),
      q('Integer then char', '    cout << 3 << \'A\';', ['3 A', '3A', 'A3', 'error'], 1, 'No space.'),
      q('Empty file idea', '    int count = 0;\n    cout << count;', ['nothing', '0', 'empty', 'error'], 1, 'Zero records still print 0 if you ask.'),
      q('Close is silent', '    cout << "saved";', ['saved', 'saved0', 'close', 'error'], 0, 'close() does not print.'),
    ],
    coding: [
      {
        title: 'Format a record',
        prompt: 'Read id and mark. Print id:mark with no spaces. Input 12 95 → 12:95',
        starter: `${io}int main() {\n    int id, mark;\n    cin >> id >> mark;\n    \n    return 0;\n}\n`,
        stdin: '12 95',
        expected: '12:95',
      },
      {
        title: 'Two employees',
        prompt: 'Read two names (words). Print them on two lines. Input Ali Sara → Ali then Sara',
        starter: `${io}int main() {\n    char a[40], b[40];\n    cin >> a >> b;\n    \n    return 0;\n}\n`,
        stdin: 'Ali Sara',
        expected: 'Ali\nSara',
      },
      {
        title: 'Payroll line',
        prompt: 'Read name (one word) and salary. Print name=salary. Input Zaima 25000 → Zaima=25000',
        starter: `${io}int main() {\n    char name[40];\n    int pay;\n    cin >> name >> pay;\n    \n    return 0;\n}\n`,
        stdin: 'Zaima 25000',
        expected: 'Zaima=25000',
      },
    ],
  },
}
