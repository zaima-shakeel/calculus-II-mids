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

export const exercisesB: Record<string, { outputGuess: OutputGuess[]; coding: CodingChallenge[] }> = {
  'cs-l07': {
    outputGuess: [
      q('for 0..2', '    for (int i = 0; i < 3; i++) cout << i;', ['123', '012', '0123', '3'], 1, 'i is 0,1,2.'),
      q('postfix pair', '    int n = 2;\n    cout << n++ << n;', ['22', '23', '32', '33'], 1, 'Prints 2, then n is 3.'),
      q('prefix', '    int n = 2;\n    cout << ++n;', ['2', '3', '1', '4'], 1, 'Increment first.'),
      q('do-while once', '    int i = 5;\n    do { cout << i; } while (i < 3);', ['5', 'nothing', '543', 'error'], 0, 'Body runs before the false test.'),
      q('for empty body trap value', '    int i;\n    for (i = 0; i < 4; i++);\n    cout << i;', ['3', '4', '0', 'nothing'], 1, 'The semicolon ate the loop; i ends at 4.'),
      q('do-while count', '    int i = 1;\n    do { cout << i; i++; } while (i <= 3);', ['123', '12', '1234', '1'], 0, '1,2,3.'),
      q('for step 2', '    for (int i = 1; i <= 7; i += 2) cout << i;', ['1234567', '1357', '246', '1'], 1, 'Odd numbers.'),
      q('postfix then use', '    int x = 5;\n    int y = x++;\n    cout << x << y;', ['55', '65', '56', '66'], 1, 'y gets 5, x becomes 6.'),
      q('prefix then use', '    int x = 5;\n    int y = ++x;\n    cout << x << y;', ['55', '66', '56', '65'], 1, 'Both become 6.'),
      q('nested look', '    for (int i = 0; i < 2; i++) cout << "X";', ['X', 'XX', 'XXX', 'nothing'], 1, 'Two iterations.'),
    ],
    coding: [
      {
        title: 'Factorial',
        prompt: 'Read n and print n!. Input 5 → 120',
        starter: `${io}int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n`,
        stdin: '5',
        expected: '120',
      },
      {
        title: 'Print 1 to n',
        prompt: 'Read n and print 1..n with no spaces. Input 5 → 12345',
        starter: `${io}int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n`,
        stdin: '5',
        expected: '12345',
      },
      {
        title: 'Power of two',
        prompt: 'Read n and print 2^n (n is small). Input 4 → 16',
        starter: `${io}int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n`,
        stdin: '4',
        expected: '16',
      },
    ],
  },
  'cs-l08': {
    outputGuess: [
      q('Fall-through', '    int n = 1;\n    switch (n) {\n        case 1: cout << "A";\n        case 2: cout << "B"; break;\n        default: cout << "C";\n    }', ['A', 'AB', 'ABC', 'B'], 1, 'No break after case 1.'),
      q('With break', '    int n = 2;\n    switch (n) {\n        case 1: cout << "A"; break;\n        case 2: cout << "B"; break;\n        default: cout << "C";\n    }', ['A', 'B', 'C', 'BC'], 1, 'Matches case 2 only.'),
      q('Default', '    int n = 9;\n    switch (n) {\n        case 1: cout << "A"; break;\n        default: cout << "Z";\n    }', ['A', 'Z', '9', 'nothing'], 1, 'No matching case.'),
      q('continue in for', '    for (int i = 1; i <= 4; i++) {\n        if (i == 2) continue;\n        cout << i;\n    }', ['1234', '134', '124', '12'], 1, '2 is skipped.'),
      q('break in for', '    for (int i = 1; i <= 5; i++) {\n        if (i == 3) break;\n        cout << i;\n    }', ['12345', '12', '123', '3'], 1, 'Leaves at 3 before printing it.'),
      q('Char case', '    char g = \'B\';\n    switch (g) {\n        case \'A\': cout << "ex"; break;\n        case \'B\': cout << "vg"; break;\n        default: cout << "no";\n    }', ['ex', 'vg', 'no', 'B'], 1, 'Grade B.'),
      q('Case sensitive', '    char g = \'a\';\n    switch (g) {\n        case \'A\': cout << "big"; break;\n        default: cout << "small";\n    }', ['big', 'small', 'a', 'error'], 1, '\'a\' is not \'A\'.'),
      q('Empty case fall', '    int n = 1;\n    switch (n) {\n        case 1:\n        case 2: cout << "low"; break;\n        default: cout << "high";\n    }', ['low', 'high', 'nothing', '12'], 0, '1 falls into case 2 body.'),
      q('Only default', '    switch (0) { default: cout << "D"; }', ['0', 'D', 'nothing', 'error'], 1, 'Always hits default.'),
      q('break skips rest', '    int i = 0;\n    while (i < 5) {\n        i++;\n        if (i == 2) break;\n        cout << i;\n    }', ['1', '12', '2', '12345'], 0, 'Prints 1, then i becomes 2 and break.'),
    ],
    coding: [
      {
        title: 'Day name',
        prompt: 'Read 1–3. Print Mon, Tue, or Wed. Else Invalid. Input 2 → Tue',
        starter: `${io}int main() {\n    int d;\n    cin >> d;\n    \n    return 0;\n}\n`,
        stdin: '2',
        expected: 'Tue',
        hint: 'switch with break',
      },
      {
        title: 'Skip evens',
        prompt: 'Read n. Print all odd numbers from 1 to n with no spaces. Input 7 → 1357',
        starter: `${io}int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n`,
        stdin: '7',
        expected: '1357',
        hint: 'continue when even',
      },
      {
        title: 'Calculator + or -',
        prompt: 'Read a, a character (+ or -), then b. Print a+b or a-b. Input 9 - 4 → 5',
        starter: `${io}int main() {\n    int a, b;\n    char op;\n    cin >> a >> op >> b;\n    \n    return 0;\n}\n`,
        stdin: '9 - 4',
        expected: '5',
      },
    ],
  },
  'cs-l09': {
    outputGuess: [
      { title: 'add()', code: `${io}int add(int a, int b) { return a + b; }\nint main() {\n    cout << add(2, 3);\n    return 0;\n}`, options: ['23', '5', '2', 'error'], correct: 1, explanation: '2+3=5.' },
      { title: 'void then number', code: `${io}void hi() { cout << "Hi"; }\nint main() {\n    hi();\n    cout << 1;\n    return 0;\n}`, options: ['Hi', 'Hi1', '1Hi', 'error'], correct: 1, explanation: 'Function prints Hi, then 1.' },
      { title: 'square', code: `${io}int sq(int n) { return n * n; }\nint main() {\n    cout << sq(6);\n    return 0;\n}`, options: ['6', '12', '36', '66'], correct: 2, explanation: '6*6.' },
      { title: 'Two calls', code: `${io}int inc(int n) { return n + 1; }\nint main() {\n    cout << inc(inc(3));\n    return 0;\n}`, options: ['3', '4', '5', '33'], correct: 2, explanation: 'inc(3)=4, inc(4)=5.' },
      { title: 'Return ignores extra', code: `${io}int f() { return 7; cout << 9; }\nint main() {\n    cout << f();\n    return 0;\n}`, options: ['79', '7', '9', '97'], correct: 1, explanation: 'return leaves before cout 9.' },
      { title: 'Parameter copy print', code: `${io}void show(int n) { cout << n; }\nint main() {\n    show(4);\n    show(4);\n    return 0;\n}`, options: ['4', '44', '8', 'error'], correct: 1, explanation: 'Called twice.' },
      { title: 'Order of args', code: `${io}int sub(int a, int b) { return a - b; }\nint main() {\n    cout << sub(10, 3);\n    return 0;\n}`, options: ['-7', '7', '13', '103'], correct: 1, explanation: '10-3.' },
      { title: 'main after call', code: `${io}int g() { return 2; }\nint main() {\n    int x = g();\n    cout << x + 1;\n    return 0;\n}`, options: ['2', '3', '1', '21'], correct: 1, explanation: '2+1.' },
      { title: 'Same name different', code: `${io}int x() { return 8; }\nint main() {\n    cout << x();\n    return 0;\n}`, options: ['error', '8', '0', 'x'], correct: 1, explanation: 'x() is a function call.' },
      { title: 'void no return value used', code: `${io}void say() { cout << "VU"; }\nint main() {\n    say();\n    return 0;\n}`, options: ['VU', 'nothing', '0', 'error'], correct: 0, explanation: 'It prints inside say().' },
    ],
    coding: [
      {
        title: 'maxOfTwo',
        prompt: 'Read two ints and print the larger using int maxOfTwo(int a, int b). Input 8 3 → 8',
        starter: `${io}int maxOfTwo(int a, int b) {\n    \n}\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    cout << maxOfTwo(x, y);\n    return 0;\n}\n`,
        stdin: '8 3',
        expected: '8',
      },
      {
        title: 'square function',
        prompt: 'Use int square(int n) to print n*n. Input 7 → 49',
        starter: `${io}int square(int n) {\n    \n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << square(n);\n    return 0;\n}\n`,
        stdin: '7',
        expected: '49',
      },
      {
        title: 'isEven',
        prompt: 'Read n. Print 1 if even else 0, using a function. Input 14 → 1',
        starter: `${io}int isEven(int n) {\n    \n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << isEven(n);\n    return 0;\n}\n`,
        stdin: '14',
        expected: '1',
      },
    ],
  },
  'cs-l10': {
    outputGuess: [
      q('By-value safe', '    // see explanation — run this idea:\n    int n = 1;\n    int copy = n;\n    copy = copy + 10;\n    cout << n;', ['11', '1', '10', '0'], 1, 'A copy changed; n is still 1. Same as call by value.'),
      { title: 'Function cannot change caller', code: `${io}void bump(int n) { n = n + 10; }\nint main() {\n    int n = 1;\n    bump(n);\n    cout << n;\n    return 0;\n}`, options: ['11', '1', '10', '0'], correct: 1, explanation: 'Parameter is a copy.' },
      { title: 'Local hides', code: `${io}int x = 5;\nvoid f() { int x = 2; cout << x; }\nint main() {\n    f();\n    cout << x;\n    return 0;\n}`, options: ['25', '55', '22', '5'], correct: 0, explanation: 'Local 2, then global 5.' },
      { title: 'Block scope', code: `${io}int main() {\n    int a = 3;\n    {\n        int a = 9;\n        cout << a;\n    }\n    cout << a;\n    return 0;\n}`, options: ['33', '99', '93', '39'], correct: 2, explanation: 'Inner 9, outer 3.' },
      { title: 'define-like const', code: `${io}int main() {\n    const int pi = 3;\n    cout << 2 * pi;\n    return 0;\n}`, options: ['23', '6', '3', 'error'], correct: 1, explanation: '2*3=6.' },
      { title: 'Return the copy', code: `${io}int grow(int n) { n = n + 1; return n; }\nint main() {\n    int x = 4;\n    cout << grow(x) << x;\n    return 0;\n}`, options: ['44', '54', '55', '45'], correct: 1, explanation: 'Returns 5, x stays 4.' },
      { title: 'Two locals', code: `${io}void a() { int i = 1; cout << i; }\nvoid b() { int i = 8; cout << i; }\nint main() {\n    a(); b();\n    return 0;\n}`, options: ['1', '8', '18', 'error'], correct: 2, explanation: 'Separate i variables.' },
      { title: 'Global change', code: `${io}int g = 1;\nvoid f() { g = 9; }\nint main() {\n    f();\n    cout << g;\n    return 0;\n}`, options: ['1', '9', '19', '0'], correct: 1, explanation: 'Globals are visible and writable.' },
      { title: 'Unchanged after void', code: `${io}void z(int x) { x = 0; }\nint main() {\n    int v = 4;\n    z(v);\n    cout << v;\n    return 0;\n}`, options: ['0', '4', 'undefined', '1'], correct: 1, explanation: 'By value.' },
      { title: 'Header idea: just a call', code: `${io}int area(int r) { return 3 * r * r; }\nint main() {\n    cout << area(2);\n    return 0;\n}`, options: ['6', '12', '3', '2'], correct: 1, explanation: '3*4=12. Prototype would live in a header.' },
    ],
    coding: [
      {
        title: 'square function',
        prompt: 'Read n and print n*n using int square(int n). Input 6 → 36',
        starter: `${io}int square(int n) {\n    \n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << square(n);\n    return 0;\n}\n`,
        stdin: '6',
        expected: '36',
      },
      {
        title: 'Does not change',
        prompt: 'Read x. Call a void function that tries to set its parameter to 0. Print x after the call (it should stay the same). Input 15 → 15',
        starter: `${io}void clear(int n) {\n    n = 0;\n}\n\nint main() {\n    int x;\n    cin >> x;\n    clear(x);\n    cout << x;\n    return 0;\n}\n`,
        stdin: '15',
        expected: '15',
      },
      {
        title: 'Circle-ish area',
        prompt: 'Read r. Print 3*r*r (integer). Input 5 → 75',
        starter: `${io}int area(int r) {\n    \n}\n\nint main() {\n    int r;\n    cin >> r;\n    cout << area(r);\n    return 0;\n}\n`,
        stdin: '5',
        expected: '75',
      },
    ],
  },
}
