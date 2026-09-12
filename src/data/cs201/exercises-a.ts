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

const starter = `${io}int main() {
    
    return 0;
}
`

export const exercisesA: Record<string, { outputGuess: OutputGuess[]; coding: CodingChallenge[] }> = {
  'cs-l01': {
    outputGuess: [
      q('Commented line', '    // cout << "Hidden";\n    cout << "Shown";', ['HiddenShown', 'Shown', 'Hidden', 'nothing'], 1, 'The first cout is a comment.'),
      q('Two inserts', '    cout << "I" << "love" << "you";', ['I love you', 'Iloveyou', 'I\nlove\nyou', 'error'], 1, 'No spaces were inserted.'),
      q('Newlines', '    cout << "A\\nB";', ['AB', 'A B', 'A\\nB', 'A then B on two lines'], 3, '\\n starts a new line.'),
      q('Only a comment', '    // cout << "Zaima";', ['Zaima', 'nothing', 'error', '0'], 1, 'Comments produce no output.'),
      q('Spaces matter', '    cout << "Hi " << "Zaima";', ['HiZaima', 'Hi Zaima', 'Hi\\nZaima', 'Zaima Hi'], 1, 'The space is inside the first string.'),
      q('Order of cout', '    cout << 1;\n    cout << 2;', ['1 2', '12', '21', '3'], 1, 'They print one after another.'),
      q('String then number', '    cout << "CS" << 201;', ['CS 201', 'CS201', '201CS', 'CS'], 1, 'No extra space.'),
      q('Return 0 is silent', '    cout << "ok";\n    return 0;', ['ok0', 'ok', '0', 'error'], 1, 'return 0 does not print.'),
      q('Two statements', '    cout << "mid";\n    cout << "term";', ['mid term', 'midterm', 'term mid', 'nothing'], 1, 'No space between the two prints.'),
      q('Quote text', '    cout << "\\"hi\\"";', ['hi', '"hi"', '\\hi\\', 'error'], 1, 'Escaped quotes print as quotes.'),
    ],
    coding: [
      { title: 'Welcome line', prompt: 'Print exactly: Ready to program', starter, expected: 'Ready to program', hint: 'cout << "Ready to program";' },
      { title: 'Your name on screen', prompt: 'Print exactly: Zaima', starter, expected: 'Zaima' },
      { title: 'Course code', prompt: 'Print exactly: CS201', starter, expected: 'CS201' },
    ],
  },
  'cs-l02': {
    outputGuess: [
      q('Toolchain words', '    cout << "compile" << " " << "link";', ['compile link', 'compilelink', 'link compile', 'error'], 0, 'A space string sits between them.'),
      q('Three words', '    cout << "editor compiler linker";', ['editorcompilerlinker', 'editor compiler linker', 'three lines', 'error'], 1, 'Spaces are inside one string.'),
      q('No space', '    cout << "OS" << "driver";', ['OS driver', 'OSdriver', 'driverOS', 'error'], 1, 'Nothing inserted between.'),
      q('Number after text', '    cout << "C" << 89;', ['C 89', 'C89', '89C', '1989'], 1, 'ANSI year glued to C.'),
      q('Two lines', '    cout << "edit\\nrun";', ['edit run', 'editrun', 'edit then run on two lines', 'run\\nedit'], 2, '\\n breaks the line.'),
      q('Empty quotes', '    cout << "A" << "" << "B";', ['A B', 'AB', 'A""B', 'error'], 1, 'Empty string adds nothing.'),
      q('Literal 0', '    cout << 0;', ['nothing', '0', 'false', 'error'], 1, 'Zero still prints.'),
      q('Bool as number', '    cout << true;', ['true', '1', 'yes', 'error'], 1, 'Default bool prints as 1.'),
      q('False bool', '    cout << false;', ['false', '0', 'no', 'error'], 1, 'Default bool prints as 0.'),
      q('Chained spaces', '    cout << "a" << " " << "b" << " " << "c";', ['abc', 'a b c', 'a  b  c', 'a,b,c'], 1, 'One space between each letter.'),
    ],
    coding: [
      { title: 'Name the toolchain', prompt: 'Print exactly: editor compiler linker loader', starter, expected: 'editor compiler linker loader' },
      { title: 'Software types', prompt: 'Print exactly: system application', starter, expected: 'system application' },
      { title: 'Language name', prompt: 'Print exactly: C language', starter, expected: 'C language' },
    ],
  },
  'cs-l03': {
    outputGuess: [
      q('Precedence', '    cout << 2 + 3 * 4;', ['20', '14', '24', '5'], 1, 'Multiply first: 2+12.'),
      q('Integer divide', '    cout << 7 / 2 << " " << 7 % 2;', ['3.5 1', '3 1', '3 0', '1 3'], 1, '7/2→3, 7%2→1.'),
      q('Paren first', '    cout << (2 + 3) * 4;', ['14', '20', '24', '9'], 1, '5*4=20.'),
      q('Modulo', '    cout << 10 % 3;', ['3', '1', '0', '10'], 1, 'Remainder 1.'),
      q('Int vs float divide', '    cout << 5 / 2 << " " << 5 / 2.0;', ['2 2', '2 2.5', '2.5 2.5', '2.5 2'], 1, 'Integer first, real second.'),
      q('Char as text', '    cout << \'A\';', ['65', 'A', 'error', '0'], 1, 'cout prints the character.'),
      q('Uninitialized is not here', '    int x = 4;\n    cout << x;', ['garbage', '4', '0', 'x'], 1, 'x was set to 4.'),
      q('Plus plus later', '    int a = 2, b = 3;\n    cout << a + b;', ['23', '5', '6', '2'], 1, '2+3=5.'),
      q('Negative divide', '    cout << -7 / 2;', ['-3', '-4', '-3.5', '3'], 0, 'Integer division truncates toward zero: -3.'),
      q('Multiply chain', '    cout << 2 * 3 * 4;', ['24', '9', '14', '234'], 0, 'Left to right: 24.'),
    ],
    coding: [
      {
        title: 'Add two integers',
        prompt: 'Read two integers and print their sum only. Input 4 9 → 13',
        starter: `${io}int main() {\n    int a, b;\n    \n    return 0;\n}\n`,
        stdin: '4 9',
        expected: '13',
        hint: 'cin >> a >> b; cout << a + b;',
      },
      {
        title: 'Remainder',
        prompt: 'Read two integers a and b. Print a % b. Input 17 5 → 2',
        starter: `${io}int main() {\n    int a, b;\n    \n    return 0;\n}\n`,
        stdin: '17 5',
        expected: '2',
      },
      {
        title: 'Swap print',
        prompt: 'Read two integers and print them swapped with a space. Input 3 8 → 8 3',
        starter: `${io}int main() {\n    int a, b;\n    \n    return 0;\n}\n`,
        stdin: '3 8',
        expected: '8 3',
      },
    ],
  },
  'cs-l04': {
    outputGuess: [
      q('Compound', '    int x = 4;\n    x *= 3;\n    x -= 2;\n    cout << x;', ['4', '10', '12', '14'], 1, '4*3=12, 12-2=10.'),
      q('Assign chain lookalike', '    int x = 5;\n    x = x + x;\n    cout << x;', ['5', '10', '25', '0'], 1, '5+5=10.'),
      q('Plus-equals', '    int n = 1;\n    n += 4;\n    cout << n;', ['1', '4', '5', '14'], 2, '1+4=5.'),
      q('Divide assign', '    int x = 20;\n    x /= 4;\n    cout << x;', ['20', '5', '4', '16'], 1, '20/4=5.'),
      q('Mod assign', '    int x = 17;\n    x %= 5;\n    cout << x;', ['17', '3', '2', '5'], 2, '17%5=2.'),
      q('Average trap', '    cout << (6 + 6 + 9) / 3;', ['7', '7.0', '21', '9'], 0, 'Integer 21/3=7.'),
      q('Integer average loss', '    cout << (5 + 6) / 2;', ['5.5', '5', '6', '11'], 1, '11/2 truncates to 5.'),
      q('Real average', '    cout << (5 + 6) / 2.0;', ['5', '5.5', '6', '11'], 1, '2.0 forces a real divide.'),
      q('Self multiply', '    int x = 3;\n    x *= x;\n    cout << x;', ['3', '6', '9', '0'], 2, '3*3=9.'),
      q('Assign then print', '    int a = 2;\n    int b = a = 9;\n    cout << a << b;', ['29', '99', '92', 'error'], 1, 'a becomes 9, b gets 9.'),
    ],
    coding: [
      {
        title: 'Average of three',
        prompt: 'Read three integers and print (a+b+c)/3 using integer division. Input 6 6 9 → 7',
        starter: `${io}int main() {\n    int a, b, c;\n    \n    return 0;\n}\n`,
        stdin: '6 6 9',
        expected: '7',
      },
      {
        title: 'Double it',
        prompt: 'Read n and print n*2. Input 11 → 22',
        starter: `${io}int main() {\n    int n;\n    \n    return 0;\n}\n`,
        stdin: '11',
        expected: '22',
      },
      {
        title: 'Running total',
        prompt: 'Read three integers and print their sum. Input 2 5 7 → 14',
        starter: `${io}int main() {\n    int a, b, c;\n    \n    return 0;\n}\n`,
        stdin: '2 5 7',
        expected: '14',
      },
    ],
  },
  'cs-l05': {
    outputGuess: [
      q('if / else', '    int m = 49;\n    if (m >= 50) cout << "Pass";\n    else cout << "Fail";', ['Pass', 'Fail', '4950', 'nothing'], 1, '49 is below 50.'),
      q('Equal pass', '    int m = 50;\n    if (m >= 50) cout << "Pass";\n    else cout << "Fail";', ['Pass', 'Fail', 'nothing', '50'], 0, '>= includes 50.'),
      q('Assignment trap', '    int x = 0;\n    if (x = 1) cout << "yes";\n    else cout << "no";', ['no', 'yes', 'error', '0'], 1, 'x=1 is true.'),
      q('&& both', '    int a = 5, b = 9;\n    if (a > 0 && b > 0) cout << "pos";\n    else cout << "no";', ['pos', 'no', 'error', '59'], 0, 'Both positive.'),
      q('|| one', '    int a = -1, b = 4;\n    if (a > 0 || b > 0) cout << "ok";\n    else cout << "no";', ['ok', 'no', 'error', '4'], 0, 'Second condition saves it.'),
      q('Not', '    int n = 3;\n    if (!(n == 3)) cout << "A";\n    else cout << "B";', ['A', 'B', 'AB', 'nothing'], 1, '!true is false, so else.'),
      q('Nested', '    int x = 8;\n    if (x > 10) cout << "big";\n    else if (x > 5) cout << "mid";\n    else cout << "small";', ['big', 'mid', 'small', 'nothing'], 1, '8 is > 5 but not > 10.'),
      q('No else', '    int x = 1;\n    if (x > 5) cout << "hi";', ['hi', 'nothing', '1', 'error'], 1, 'Condition false, no else.'),
      q('Two statements need braces', '    int x = 1;\n    if (x > 0)\n        cout << "A";\n    cout << "B";', ['A', 'B', 'AB', 'nothing'], 2, 'B is outside the if.'),
      q('Zero is false', '    if (0) cout << "T";\n    else cout << "F";', ['T', 'F', '0', 'error'], 1, '0 is false.'),
    ],
    coding: [
      {
        title: 'Sign of a number',
        prompt: 'Read an integer. Print Positive, Zero, or Negative. Input -3 → Negative',
        starter: `${io}int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n`,
        stdin: '-3',
        expected: 'Negative',
      },
      {
        title: 'Pass mark',
        prompt: 'Read marks. Print Pass if >= 50 else Fail. Input 72 → Pass',
        starter: `${io}int main() {\n    int m;\n    cin >> m;\n    \n    return 0;\n}\n`,
        stdin: '72',
        expected: 'Pass',
      },
      {
        title: 'Max of two',
        prompt: 'Read two integers and print the larger. Input 4 11 → 11',
        starter: `${io}int main() {\n    int a, b;\n    cin >> a >> b;\n    \n    return 0;\n}\n`,
        stdin: '4 11',
        expected: '11',
      },
    ],
  },
  'cs-l06': {
    outputGuess: [
      q('Count', '    int i = 1;\n    while (i <= 3) { cout << i; i++; }', ['123', '012', '12', '1233'], 0, 'Prints 1 2 3.'),
      q('False at start', '    int i = 5;\n    while (i < 3) { cout << i; i++; }', ['5', 'nothing', '345', 'error'], 1, 'Body never runs.'),
      q('Down to zero', '    int i = 3;\n    while (i > 0) { cout << i; i--; }', ['321', '3210', '123', '3'], 0, '3 then 2 then 1.'),
      q('Sum loop', '    int i = 1, s = 0;\n    while (i <= 4) { s += i; i++; }\n    cout << s;', ['10', '4', '6', '1'], 0, '1+2+3+4=10.'),
      q('Even filter', '    int i = 1;\n    while (i <= 5) { if (i % 2 == 0) cout << i; i++; }', ['12345', '24', '135', '2'], 1, 'Only evens 2 and 4.'),
      q('Infinite avoided', '    int i = 0;\n    while (i < 2) { cout << "A"; i++; }', ['A', 'AA', 'AAA', 'nothing'], 1, 'Two times.'),
      q('Condition i!=i', '    int i = 1;\n    while (i != i) cout << "X";', ['X', 'XX', 'nothing', 'error'], 2, 'Never true.'),
      q('Print then add', '    int n = 2;\n    while (n < 8) { cout << n; n = n + 2; }', ['246', '248', '24', '2'], 0, '2, 4, 6 then 8 stops.'),
      q('Last value', '    int i = 0;\n    while (i < 3) i++;\n    cout << i;', ['2', '3', '0', '1'], 1, 'Stops when i becomes 3.'),
      q('Body once-ish', '    int i = 10;\n    while (i == 10) { cout << "Z"; i = 0; }', ['Z', 'ZZ', 'nothing', '10'], 0, 'Runs once then dies.'),
    ],
    coding: [
      {
        title: 'Sum 1 to N',
        prompt: 'Read N and print 1+2+...+N. Input 5 → 15',
        starter: `${io}int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n`,
        stdin: '5',
        expected: '15',
        hint: 'while loop and a running total',
      },
      {
        title: 'Count down',
        prompt: 'Read n and print n n-1 ... 1 with no spaces. Input 4 → 4321',
        starter: `${io}int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n`,
        stdin: '4',
        expected: '4321',
      },
      {
        title: 'How many digits',
        prompt: 'Read a positive integer and print how many digits it has. Input 308 → 3',
        starter: `${io}int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n`,
        stdin: '308',
        expected: '3',
        hint: 'Keep dividing by 10.',
      },
    ],
  },
}
