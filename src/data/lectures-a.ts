import type { Lecture } from './types'

export const lecturesA: Lecture[] = [
  {
    id: 'l1-2',
    number: '1–2',
    title: 'Introduction to Functions',
    shortTitle: 'Functions',
    overview:
      'These lectures introduce functions on the Cartesian plane: independent and dependent variables, evaluating functions of one, two, or three variables, and the standard parabola. Calculus is the study of how functions change, so this is the foundation.',
    takeaways: [
      'A function sends each input to exactly one output.',
      'The first coordinate is the abscissa $x$; the second is the ordinate $y$.',
      'Evaluate $f(x,y,z)$ by substituting the given point, using parentheses for negatives.',
    ],
    concepts: [
      {
        name: 'Cartesian coordinate system',
        definition: 'Two perpendicular axes that locate every point in the plane by a unique pair $(x,y)$.',
        explanation: 'Think of a map: $x$ is horizontal, $y$ is vertical, and the origin is $(0,0)$.',
        why: 'Every graph, domain, and later 3D surface starts from this grid.',
        priority: 'high',
      },
      {
        name: 'Function',
        definition: 'A relation in which each input (independent variable) produces exactly one output (dependent variable).',
        explanation: 'A machine: put $x$ in, get one $y$ out. One-to-many is not a function.',
        why: 'The rest of Calculus 2 is about rates, limits, and extrema of functions.',
        priority: 'high',
      },
      {
        name: 'Parabola',
        definition: 'The curve of $y = ax^2 + bx + c$.',
        explanation: 'A U-shape. If $a>0$ it opens up; if $a<0$ it opens down.',
        why: 'Standard model for quadratic motion and a frequent exam graph.',
        priority: 'medium',
      },
    ],
    formulas: [
      {
        name: 'Function notation',
        latex: 'y = f(x)',
        meaning: '$y$ is the output of $f$ at input $x$.',
        when: 'Evaluating a single-variable function.',
      },
      {
        name: 'Vertex of a parabola',
        latex: 'x = -\\frac{b}{2a}',
        meaning: 'The $x$-coordinate of the turning point.',
        when: 'Finding where a parabola turns.',
      },
    ],
    methods: [
      {
        type: 'Evaluating a function of several variables',
        recognize: 'You are given $f(x,y)$ or $f(x,y,z)$ and a point such as $(2,3)$.',
        steps: [
          'Read the point: for $(2,3)$, $x=2$ and $y=3$.',
          'Replace every $x$ with $2$ and every $y$ with $3$, using parentheses.',
          'Simplify with PEMDAS: powers before products and sums.',
        ],
        example: {
          question: 'Evaluate $f(x,y)=x^2+y$ at $(2,3)$.',
          solution: '$f(2,3)=(2)^2+(3)=4+3=7$.',
        },
      },
    ],
    examples: [
      {
        question: 'Find $f(2,4)$ if $f(x,y)=x^3+y^2$.',
        concept: 'Two-variable evaluation',
        steps: ['$f(2,4)=(2)^3+(4)^2$', '$=8+16=24$'],
        answer: '$24$',
      },
      {
        question: 'Given $f(x,y)=x^2+2y$, evaluate at $(3,-1)$.',
        concept: 'Signs under substitution',
        steps: ['$f(3,-1)=(3)^2+2(-1)$', '$=9-2=7$'],
        answer: '$7$',
      },
    ],
    traps: [
      '$(-2)^2=4$, but $-2^2=-4$. Always wrap a negative input in parentheses.',
      'Do not add before you square.',
      'A relation is a function only if one input has exactly one output.',
    ],
    memorize: [
      'Quadrants: Q1 $(+,+)$, Q2 $(-,+)$, Q3 $(-,-)$, Q4 $(+,-)$.',
      'Abscissa $=x$, ordinate $=y$, origin $=(0,0)$.',
      'Vertex: $x=-b/(2a)$ for $y=ax^2+bx+c$.',
    ],
    revision: [
      'Functions are machines: input $\\to$ rule $\\to$ one output.',
      'More variables just means more inputs to substitute.',
      'Keep signs inside parentheses.',
    ],
    mcqs: [
      {
        question: 'In the point $(5,-3)$, the ordinate is:',
        options: ['$5$', '$-3$', '$2$', '$0$'],
        correct: 1,
        explanation: 'The ordinate is the $y$-coordinate, so $-3$.',
      },
      {
        question: 'If $f(x)=x^2$, then $f(-3)$ is:',
        options: ['$9$', '$-9$', '$6$', '$-6$'],
        correct: 0,
        explanation: '$(-3)^2=(-3)(-3)=9$.',
      },
      {
        question: 'Which quadrant contains the point $(-2,-5)$?',
        options: ['Quadrant 1', 'Quadrant 2', 'Quadrant 3', 'Quadrant 4'],
        correct: 2,
        explanation: 'Both coordinates are negative, so Quadrant 3.',
      },
      {
        question: 'For a relation to be a function, one input must have:',
        options: ['Zero outputs', 'Many outputs', 'Exactly one output', 'Two outputs'],
        correct: 2,
        explanation: 'The definition of a function is exactly one output per input.',
      },
      {
        question: 'The vertex $x$-coordinate of a parabola is:',
        options: ['$-b/2a$', '$b/2a$', '$-a/2b$', '$a/2b$'],
        correct: 0,
        explanation: 'The turning point sits at $x=-b/(2a)$.',
      },
    ],
    practice: [
      {
        question: 'Evaluate $f(x,y)=2x+y^2$ at $(4,3)$.',
        steps: ['Substitute $x=4$, $y=3$.', '$f(4,3)=2(4)+(3)^2=8+9=17$.'],
        answer: '$17$',
      },
      {
        question: 'If $f(x,y,z)=x+y+z$, find the value at $(1,-1,5)$.',
        steps: ['$f(1,-1,5)=1+(-1)+5=5$.'],
        answer: '$5$',
      },
      {
        question: 'If $f(x,y,z)=x^2+y^2+z$, evaluate at $(1,2,3)$ and say why this is a function of three variables.',
        steps: [
          '$(1)^2+(2)^2+3=1+4+3=8$.',
          'The output depends on three independent inputs $x$, $y$, and $z$.',
        ],
        answer: '$8$; three independent inputs',
      },
    ],
    cram: {
      top: [
        'Function evaluation by substitution',
        'Quadrant sign rules',
        'One input, one output',
        'Vertex $x=-b/(2a)$',
        'Abscissa vs ordinate',
      ],
      min30: 'Practice substituting negative numbers and reciting quadrant signs.',
      min15: 'Memorize the parabola vertex and the definition of a function.',
      min5: 'Q1$(+,+)$, Q2$(-,+)$, Q3$(-,-)$, Q4$(+,-)$; ordinate $=y$, abscissa $=x$.',
    },
  },
  {
    id: 'l3',
    number: '3',
    title: 'Elements of Three-Dimensional Geometry',
    shortTitle: '3D geometry',
    overview:
      'Move from the plane into space: points $(x,y,z)$, the 3D distance formula, direction angles, direction cosines, and direction ratios. Surfaces meet in curves; two planes typically meet in a line.',
    takeaways: [
      'Distance in space is 3D Pythagoras.',
      'Direction cosines satisfy $\\cos^2\\alpha+\\cos^2\\beta+\\cos^2\\gamma=1$.',
      'Direction ratios are proportional to direction cosines; they need not square-sum to $1$.',
    ],
    concepts: [
      {
        name: '3D coordinate system',
        definition: 'Three axes $x$, $y$, $z$ locate a point $(x,y,z)$ in space.',
        explanation: 'The extra $z$-axis is depth. The origin is $(0,0,0)$. On the $xy$-plane, $z=0$.',
        why: 'Every later surface, tangent plane, and vector lives in this space.',
        priority: 'high',
      },
      {
        name: 'Direction angles and cosines',
        definition: 'Angles $\\alpha,\\beta,\\gamma$ that a line makes with the positive $x$, $y$, $z$ axes; their cosines are the direction cosines.',
        explanation: 'They describe how a line is oriented in space.',
        why: 'Used for vectors, lines, and converting ratios to unit direction.',
        priority: 'high',
      },
      {
        name: 'Intersection of surfaces',
        definition: 'The set of points common to two or more surfaces.',
        explanation: 'Two planes usually meet in a straight line.',
        why: 'Constraints in multivariable problems are intersections.',
        priority: 'medium',
      },
    ],
    formulas: [
      {
        name: 'Distance in $\\mathbb{R}^3$',
        latex: 'd=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}',
        meaning: 'Straight-line length between two points.',
        when: 'Any “find the distance” question in 3D.',
      },
      {
        name: 'Direction cosine identity',
        latex: '\\cos^2\\alpha+\\cos^2\\beta+\\cos^2\\gamma=1',
        meaning: 'The three direction cosines form a unit direction.',
        when: 'Checking whether numbers can be direction cosines, or finding a missing one.',
      },
    ],
    methods: [
      {
        type: 'Distance between two points',
        recognize: 'You are given $P(x_1,y_1,z_1)$ and $Q(x_2,y_2,z_2)$.',
        steps: [
          'Subtract corresponding coordinates.',
          'Square each difference (a negative square is still positive).',
          'Add, then take the square root.',
        ],
        example: {
          question: 'Distance from $P(1,2,3)$ to $Q(4,6,3)$.',
          solution: '$d=\\sqrt{(4-1)^2+(6-2)^2+(3-3)^2}=\\sqrt{9+16+0}=5$.',
        },
      },
      {
        type: 'Ratios to direction cosines',
        recognize: 'You are given direction ratios $(a,b,c)$.',
        steps: [
          'Compute the magnitude $L=\\sqrt{a^2+b^2+c^2}$.',
          'Direction cosines are $\\left(\\frac{a}{L},\\frac{b}{L},\\frac{c}{L}\\right)$.',
        ],
      },
    ],
    examples: [
      {
        question: 'Verify whether $\\cos 45^\\circ$, $\\cos 45^\\circ$, $\\cos 90^\\circ$ are direction cosines.',
        steps: [
          '$\\left(\\frac{1}{\\sqrt{2}}\\right)^2+\\left(\\frac{1}{\\sqrt{2}}\\right)^2+0^2=\\frac12+\\frac12+0=1$.',
          'The identity holds, so they are valid.',
        ],
        answer: 'Yes, they are direction cosines.',
      },
      {
        question: 'Distance from $A(1,0,1)$ to $B(2,3,0)$.',
        steps: ['$\\sqrt{(2-1)^2+(3-0)^2+(0-1)^2}=\\sqrt{1+9+1}=\\sqrt{11}$.'],
        answer: '$\\sqrt{11}$',
      },
    ],
    traps: [
      '$(-3)^2=9$, not $-9$.',
      'Direction ratios need not satisfy the sum-of-squares identity; direction cosines must.',
      '$(1,1,1)$ cannot be a triple of direction cosines because $1+1+1=3\\neq 1$.',
    ],
    memorize: [
      'Distance formula in 3D.',
      '$\\cos^2\\alpha+\\cos^2\\beta+\\cos^2\\gamma=1$.',
      'On the $xy$-plane, $z=0$.',
    ],
    revision: [
      'Distance is 3D Pythagoras.',
      'Cosines describe orientation; their squares sum to $1$.',
    ],
    mcqs: [
      {
        question: 'The distance from the origin to $(3,4,12)$ is:',
        options: ['$13$', '$7$', '$5$', '$12$'],
        correct: 0,
        explanation: '$\\sqrt{9+16+144}=\\sqrt{169}=13$.',
      },
      {
        question: 'If $\\cos\\alpha=1/2$ and $\\cos\\beta=1/2$, then $\\cos^2\\gamma$ equals:',
        options: ['$1/2$', '$1/4$', '$1$', '$0$'],
        correct: 0,
        explanation: '$1/4+1/4+\\cos^2\\gamma=1\\Rightarrow\\cos^2\\gamma=1/2$, so $\\cos\\gamma=\\pm 1/\\sqrt{2}$.',
      },
      {
        question: 'The $z$-coordinate of every point in the $xy$-plane is:',
        options: ['$1$', '$x$', '$0$', '$y$'],
        correct: 2,
        explanation: 'The $xy$-plane is exactly $z=0$.',
      },
      {
        question: 'Two intersecting planes typically meet in:',
        options: ['A point', 'A sphere', 'A straight line', 'A parabola'],
        correct: 2,
        explanation: 'The intersection of two distinct non-parallel planes is a line.',
      },
      {
        question: 'Can $(1,1,1)$ be a triple of direction cosines?',
        options: ['Yes', 'No', 'Only if they are ratios', 'Only in the $xy$-plane'],
        correct: 1,
        explanation: '$1^2+1^2+1^2=3\\neq 1$.',
      },
    ],
    practice: [
      {
        question: 'Distance between $(0,0,0)$ and $(2,-2,1)$.',
        steps: ['$\\sqrt{2^2+(-2)^2+1^2}=\\sqrt{4+4+1}=3$.'],
        answer: '$3$',
      },
      {
        question: 'If direction ratios are $(1,2,2)$, find the direction cosines.',
        steps: [
          '$L=\\sqrt{1+4+4}=3$.',
          'Cosines: $\\left(\\frac13,\\frac23,\\frac23\\right)$.',
        ],
        answer: '$\\left(\\frac13,\\frac23,\\frac23\\right)$',
      },
    ],
    cram: {
      top: [
        '3D distance formula',
        'Direction cosine identity',
        'Ratios $\\to$ divide by magnitude',
        'Plane / cylinder recognition',
        '$z=0$ on the $xy$-plane',
      ],
      min30: 'Practice distance and converting ratios to cosines.',
      min15: 'Memorize the distance formula and $\\sum\\cos^2=1$.',
      min5: 'Memorize $\\cos^2\\alpha+\\cos^2\\beta+\\cos^2\\gamma=1$.',
    },
  },
  {
    id: 'l4',
    number: '4',
    title: 'Polar Coordinates',
    shortTitle: 'Polar coordinates',
    overview:
      'Polar coordinates locate a point by radius $r$ and angle $\\theta$ instead of $(x,y)$. Cylindrical coordinates add height $z$; spherical coordinates use $\\rho$ and two angles. These systems make circles and radial limits much easier.',
    takeaways: [
      '$x=r\\cos\\theta$, $y=r\\sin\\theta$, $r^2=x^2+y^2$.',
      'The pole (origin) is $r=0$ for any $\\theta$.',
      '$\\tan^{-1}(y/x)$ must be adjusted for the correct quadrant.',
    ],
    concepts: [
      {
        name: 'Polar coordinates $(r,\\theta)$',
        definition: 'A point is identified by distance $r$ from the pole and angle $\\theta$ from the positive $x$-axis.',
        explanation: 'Like radar: how far, and in which direction.',
        why: 'Circles and rotationally symmetric limits simplify dramatically.',
        priority: 'high',
      },
      {
        name: 'Cylindrical coordinates $(r,\\theta,z)$',
        definition: 'Polar coordinates in the $xy$-plane plus vertical height $z$.',
        explanation: 'A cylinder is $r=$ constant.',
        why: 'Standard 3D system for vertical cylinders.',
        priority: 'high',
      },
      {
        name: 'Spherical coordinates $(\\rho,\\theta,\\phi)$',
        definition: 'Distance $\\rho$ from the origin together with two angles.',
        explanation: 'A sphere is $\\rho=$ constant.',
        why: 'Useful for balls and radial 3D problems.',
        priority: 'medium',
      },
    ],
    formulas: [
      {
        name: 'Rectangular to polar',
        latex: 'r=\\sqrt{x^2+y^2},\\quad \\theta=\\tan^{-1}(y/x)',
        meaning: 'Radius is always nonnegative; angle depends on quadrant.',
        when: 'Converting a Cartesian point to polar.',
      },
      {
        name: 'Polar to rectangular',
        latex: 'x=r\\cos\\theta,\\quad y=r\\sin\\theta',
        meaning: 'Project $r$ onto the axes.',
        when: 'Changing a polar point or polar limit back to $x,y$.',
      },
      {
        name: 'Spherical to cylindrical',
        latex: 'r=\\rho\\sin\\phi,\\quad \\theta=\\theta,\\quad z=\\rho\\cos\\phi',
        meaning: 'Project the spherical radius onto the cylinder.',
        when: 'Coordinate-conversion questions in 3D.',
      },
    ],
    methods: [
      {
        type: 'Convert rectangular to polar',
        steps: [
          'Compute $r=\\sqrt{x^2+y^2}$.',
          'Compute $\\theta=\\tan^{-1}(y/x)$, then fix the quadrant: if $x<0$, add $\\pi$.',
          'If $x=0$, the point is on the $y$-axis: $\\theta=\\pi/2$ or $3\\pi/2$.',
        ],
        example: {
          question: 'Convert $(1,1)$ to polar.',
          solution: '$r=\\sqrt{2}$, $\\theta=\\pi/4$, so $(\\sqrt{2},\\pi/4)$.',
        },
      },
    ],
    examples: [
      {
        question: 'Convert $(0,1)$ to polar coordinates.',
        steps: [
          '$r=\\sqrt{0+1}=1$.',
          '$\\tan\\theta=1/0$ is undefined; the point is on the positive $y$-axis, so $\\theta=\\pi/2$.',
        ],
        answer: '$(1,\\pi/2)$',
      },
      {
        question: 'Convert spherical $(\\sqrt{3},\\pi/3,\\pi/2)$ to cylindrical.',
        steps: [
          '$r=\\sqrt{3}\\sin(\\pi/2)=\\sqrt{3}$.',
          '$\\theta=\\pi/3$, $z=\\sqrt{3}\\cos(\\pi/2)=0$.',
        ],
        answer: '$(\\sqrt{3},\\pi/3,0)$',
      },
    ],
    traps: [
      '$r$ is taken nonnegative; $\\theta$ carries the quadrant information.',
      'Blindly using $\\tan^{-1}(y/x)$ fails in Quadrants 2 and 3.',
      'Division by zero in $y/x$ means the point is on the $y$-axis.',
    ],
    memorize: [
      '$x=r\\cos\\theta$, $y=r\\sin\\theta$, $r^2=x^2+y^2$.',
      'Origin: $r=0$.',
      '$r=\\rho\\sin\\phi$, $z=\\rho\\cos\\phi$.',
    ],
    revision: [
      'Polar is radar coordinates.',
      'Always check the quadrant of $\\theta$.',
    ],
    mcqs: [
      {
        question: 'The radial distance $r$ for the point $(3,4)$ is:',
        options: ['$3$', '$4$', '$5$', '$7$'],
        correct: 2,
        explanation: '$r=\\sqrt{9+16}=5$.',
      },
      {
        question: 'If $r=0$ in polar coordinates, the point is:',
        options: ['On the $x$-axis', 'The origin (pole)', 'Undefined', 'On the unit circle'],
        correct: 1,
        explanation: '$r=0$ is the pole, regardless of $\\theta$.',
      },
      {
        question: '$x^2+y^2$ in polar form is:',
        options: ['$r$', '$r^2$', '$r\\sin\\theta$', '$r\\cos\\theta$'],
        correct: 1,
        explanation: 'By definition $r^2=x^2+y^2$.',
      },
      {
        question: '$(1,1)$ in polar coordinates is:',
        options: ['$(1,\\pi/4)$', '$(\\sqrt{2},\\pi/4)$', '$(2,\\pi/2)$', '$(\\sqrt{2},\\pi/2)$'],
        correct: 1,
        explanation: '$r=\\sqrt{2}$ and $\\theta=\\pi/4$.',
      },
    ],
    practice: [
      {
        question: 'Convert $(-1,0)$ to polar coordinates with $r\\ge 0$ and $\\theta\\in[0,2\\pi)$.',
        steps: [
          '$r=\\sqrt{1+0}=1$.',
          'The point is on the negative $x$-axis, so $\\theta=\\pi$.',
        ],
        answer: '$(1,\\pi)$',
      },
      {
        question: 'If $r=2$ and $\\theta=\\pi/3$, find $(x,y)$.',
        steps: [
          '$x=2\\cos(\\pi/3)=2\\cdot\\frac12=1$.',
          '$y=2\\sin(\\pi/3)=2\\cdot\\frac{\\sqrt{3}}{2}=\\sqrt{3}$.',
        ],
        answer: '$(1,\\sqrt{3})$',
      },
    ],
    cram: {
      top: [
        '$r^2=x^2+y^2$',
        '$x=r\\cos\\theta$',
        '$y=r\\sin\\theta$',
        'Origin is $r=0$',
        'Quadrant of $\\theta$',
      ],
      min30: 'Convert several points, one in each quadrant.',
      min15: 'Memorize the three conversion formulas and do one example.',
      min5: 'Memorize $x=r\\cos\\theta$ and $y=r\\sin\\theta$.',
    },
  },
  {
    id: 'l5',
    number: '5',
    title: 'Limits of Multivariable Functions',
    shortTitle: 'Multivariable limits',
    overview:
      'A limit in two variables exists only if every path of approach gives the same value. Path tests ($y=mx$) prove non-existence; polar substitution $x=r\\cos\\theta$, $y=r\\sin\\theta$ often simplifies expressions that contain $x^2+y^2$.',
    takeaways: [
      'Different path values $\\Rightarrow$ the limit does not exist.',
      'Polar: as $(x,y)\\to(0,0)$, $r\\to 0$. If the result still depends on $\\theta$, DNE.',
      'Domain: no zero denominators; square roots need nonnegative insides.',
    ],
    concepts: [
      {
        name: 'Domain of $f(x,y)$',
        definition: 'All input pairs for which $f(x,y)$ is a real number.',
        explanation: 'Exclude division by zero and even roots of negatives. For $\\ln u$ you need $u>0$.',
        why: 'You cannot take a limit or derivative at a point that is not in the domain.',
        priority: 'high',
      },
      {
        name: 'Path dependence',
        definition: 'The limit at $(x_0,y_0)$ exists only if every approach path yields the same $L$.',
        explanation: 'Left, right, along $y=0$, along $y=x$, along $y=mx$ — all must agree.',
        why: 'This is the standard VU exam method to show a limit does not exist.',
        priority: 'high',
      },
      {
        name: 'Polar transformation',
        definition: 'Replace $x=r\\cos\\theta$, $y=r\\sin\\theta$ so that $(x,y)\\to(0,0)$ becomes $r\\to 0$.',
        explanation: 'If the simplified expression still contains $\\theta$, the limit is not unique.',
        why: 'Cleans up fractions built from $x^2+y^2$.',
        priority: 'high',
      },
    ],
    formulas: [
      {
        name: 'Polar substitution',
        latex: 'x=r\\cos\\theta,\\quad y=r\\sin\\theta,\\quad r^2=x^2+y^2',
        meaning: 'Distance-from-origin coordinates.',
        when: 'Limits at the origin involving $x^2+y^2$.',
      },
      {
        name: 'Limit laws',
        latex: '\\lim(cf)=cL,\\quad \\lim(f\\pm g)=L_1\\pm L_2',
        meaning: 'Limits pass through constants, sums, products, and quotients if the denominator limit is nonzero.',
        when: 'After you already know the pieces exist.',
      },
    ],
    methods: [
      {
        type: 'Path test $y=mx$',
        recognize: 'A rational expression such as $\\frac{xy}{x^2+y^2}$ as $(x,y)\\to(0,0)$.',
        steps: [
          'Substitute $y=mx$.',
          'Cancel common powers of $x$.',
          'Take $x\\to 0$. If the answer still contains $m$, the limit DNE.',
        ],
        example: {
          question: '$\\displaystyle\\lim_{(x,y)\\to(0,0)}\\frac{x^2-y^2}{x^2+y^2}$.',
          solution: 'Along $y=mx$: $\\frac{1-m^2}{1+m^2}$, which depends on $m$. DNE.',
        },
      },
    ],
    examples: [
      {
        question: 'Use polar coordinates on $\\frac{xy}{x^2+y^2}$ as $(x,y)\\to(0,0)$.',
        concept: 'Polar path dependence',
        steps: [
          '$\\frac{(r\\cos\\theta)(r\\sin\\theta)}{r^2}=\\cos\\theta\\sin\\theta$.',
          'This depends on $\\theta$, so the limit does not exist.',
        ],
        answer: 'Does not exist',
      },
      {
        question: 'Along $x=0$ and $y=0$, evaluate $\\frac{x^2}{x^2+y^2}$ as $(x,y)\\to(0,0)$.',
        steps: [
          'Along $x=0$: $0/y^2=0$.',
          'Along $y=0$: $x^2/x^2=1$.',
          '$0\\neq 1$, so DNE.',
        ],
        answer: 'Does not exist',
      },
    ],
    traps: [
      'One path agreeing is not enough to prove the limit exists.',
      'If two paths disagree, you are done: DNE.',
      'In polar form, $r$ must go to $0$; leftover $\\theta$ means DNE.',
    ],
    memorize: [
      'Path $y=mx$.',
      '$x=r\\cos\\theta$, $y=r\\sin\\theta$, $x^2+y^2=r^2$.',
      'Two different path values $\\Rightarrow$ DNE.',
    ],
    revision: [
      '$k/0$ with $k\\neq 0$ blows up; $0/0$ needs paths or polar.',
      'The $y=mx$ test is the first tool for non-existence.',
    ],
    mcqs: [
      {
        question: 'If a function approaches different values along two paths, the limit:',
        options: ['Is zero', 'Is infinity', 'Does not exist', 'Equals the average'],
        correct: 2,
        explanation: 'Path disagreement is the definition of non-existence.',
      },
      {
        question: 'The standard family of linear paths for limits at the origin is:',
        options: ['$x=y^2$', '$y=mx$', '$x=e^y$', '$x=y+1$'],
        correct: 1,
        explanation: '$y=mx$ tests every straight line through the origin at once.',
      },
      {
        question: '$x^2+y^2$ in polar coordinates is:',
        options: ['$r$', '$r^2$', '$r\\sin\\theta$', '$r\\cos\\theta$'],
        correct: 1,
        explanation: '$r^2=x^2+y^2$.',
      },
      {
        question: 'Why is $y=mx$ a powerful test?',
        options: [
          'It only checks the $x$-axis',
          'Varying $m$ checks infinitely many lines',
          'It always proves the limit exists',
          'It replaces polar coordinates',
        ],
        correct: 1,
        explanation: 'Each $m$ is a different line; if the result depends on $m$, DNE.',
      },
    ],
    practice: [
      {
        question: 'Show that $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\frac{xy}{x^2+y^2}$ does not exist, using $y=mx$.',
        steps: [
          'Substitute $y=mx$: $\\frac{x(mx)}{x^2+m^2x^2}=\\frac{m}{1+m^2}$.',
          'The value depends on the slope $m$ (e.g. $m=0$ gives $0$, $m=1$ gives $1/2$).',
          'Therefore the limit does not exist.',
        ],
        answer: 'DNE',
      },
    ],
    cram: {
      top: [
        'Path test $y=mx$',
        'Polar substitution',
        'Domain (denominator $\\neq 0$)',
        'Indeterminate $0/0$',
        'Limit laws',
      ],
      min30: 'Run $y=mx$ and polar on two classic fractions.',
      min15: 'Do one $y=mx$ rational-function example.',
      min5: 'Memorize $x=r\\cos\\theta$, $y=r\\sin\\theta$, $x^2+y^2=r^2$.',
    },
  },
  {
    id: 'l6',
    number: '6',
    title: 'Continuity and Partial Derivatives',
    shortTitle: 'Continuity & partials',
    overview:
      'A multivariable function is continuous at a point only if it is defined there, the limit exists, and the two agree. Partial derivatives differentiate with respect to one variable while freezing the others.',
    takeaways: [
      'Continuity: defined + limit exists + limit equals $f(x_0,y_0)$.',
      '$f_x$ treats $y$ as a constant; $f_y$ treats $x$ as a constant.',
      'Use product, chain, and log rules exactly as in one variable.',
    ],
    concepts: [
      {
        name: 'Continuity of $f(x,y)$',
        definition: 'Continuous at $(x_0,y_0)$ if $f$ is defined there, $\\lim f$ exists, and the limit equals $f(x_0,y_0)$.',
        explanation: 'No hole and no jump. If the denominator is zero, it is usually discontinuous.',
        why: 'You need continuity before you trust tangent planes and extrema.',
        priority: 'high',
      },
      {
        name: 'Partial derivatives',
        definition: 'Differentiate with respect to one variable, treating the others as constants.',
        explanation: 'For $f(x,y)=x^2y$, $f_x=2xy$ and $f_y=x^2$.',
        why: 'This is the engine of the rest of the midterm.',
        priority: 'high',
      },
    ],
    formulas: [
      {
        name: 'Partial with respect to $x$',
        latex: 'f_x=\\frac{\\partial f}{\\partial x}',
        meaning: 'Rate of change as $x$ moves and $y$ is held fixed.',
        when: 'Any “find $f_x$” question.',
      },
      {
        name: 'Partial with respect to $y$',
        latex: 'f_y=\\frac{\\partial f}{\\partial y}',
        meaning: 'Rate of change as $y$ moves and $x$ is held fixed.',
        when: 'Any “find $f_y$” question.',
      },
    ],
    methods: [
      {
        type: 'Checking continuity at $(0,0)$',
        steps: [
          'Is $f(0,0)$ defined? A zero denominator usually means no.',
          'Test the limit along several paths.',
          'If the limit DNE, the function is not continuous.',
        ],
      },
      {
        type: 'Computing $f_x$ and $f_y$',
        steps: [
          'Choose the variable. Freeze the other one.',
          'Apply power, product, or chain rule.',
          'Simplify.',
        ],
        example: {
          question: '$f(x,y)=2x^2y+4x$.',
          solution: '$f_x=4xy+4$, $f_y=2x^2$.',
        },
      },
    ],
    examples: [
      {
        question: 'Find $f_x$ and $f_y$ for $f(x,y)=x^4\\sin(xy^3)$.',
        concept: 'Product and chain rules',
        steps: [
          '$f_x=4x^3\\sin(xy^3)+x^4\\cos(xy^3)\\cdot y^3$.',
          '$f_y=x^4\\cos(xy^3)\\cdot 3xy^2=3x^5 y^2\\cos(xy^3)$.',
        ],
        answer: '$f_x=4x^3\\sin(xy^3)+x^4 y^3\\cos(xy^3)$, $f_y=3x^5 y^2\\cos(xy^3)$',
      },
      {
        question: 'For $f(x,y)=\\ln(x^2+y^2)$, find both first partials.',
        steps: [
          '$f_x=\\frac{1}{x^2+y^2}\\cdot 2x=\\frac{2x}{x^2+y^2}$.',
          '$f_y=\\frac{2y}{x^2+y^2}$.',
        ],
        answer: '$f_x=\\frac{2x}{x^2+y^2}$, $f_y=\\frac{2y}{x^2+y^2}$',
      },
    ],
    traps: [
      'Forgetting to freeze $y$ when computing $f_x$.',
      'Dropping the inner derivative in the chain rule.',
      'A defined value at a point does not prove the limit exists.',
    ],
    memorize: [
      'Three continuity conditions.',
      'Power, product, and chain rules for partials.',
      '$\\frac{d}{dx}\\ln u=\\frac{1}{u}u\'$, $\\frac{d}{dx}\\sin u=\\cos u\\cdot u\'$.',
    ],
    revision: [
      'Continuity = defined + limit + equality.',
      'Partial = ordinary derivative of one letter.',
    ],
    mcqs: [
      {
        question: 'For $f(x,y)=3x^2 y+y^3$, $f_x$ is:',
        options: ['$6xy$', '$3x^2+3y^2$', '$6xy+3y^2$', '$6x$'],
        correct: 0,
        explanation: 'Treat $y$ as constant: derivative of $3x^2 y$ is $6xy$; $y^3$ dies.',
      },
      {
        question: 'The derivative of a constant with respect to $x$ is:',
        options: ['$1$', '$x$', '$0$', 'undefined'],
        correct: 2,
        explanation: 'Constants do not change.',
      },
      {
        question: 'If two paths give different limit values, the limit:',
        options: ['Is the average', 'Is zero', 'Does not exist', 'Equals $f(0,0)$'],
        correct: 2,
        explanation: 'Path disagreement means DNE, hence not continuous.',
      },
      {
        question: 'For $f(x,y)=e^{xy}$, $f_x$ is:',
        options: ['$e^{xy}$', '$y e^{xy}$', '$x e^{xy}$', '$0$'],
        correct: 1,
        explanation: 'Chain rule: derivative of $xy$ with respect to $x$ is $y$.',
      },
      {
        question: 'If $f(x,y)=\\ln(x+y)$, then $f_y$ is:',
        options: ['$\\frac{1}{x}$', '$\\frac{1}{x+y}$', '$x+y$', '$1$'],
        correct: 1,
        explanation: '$\\frac{1}{u}\\cdot u_y$ with $u=x+y$.',
      },
    ],
    practice: [
      {
        question: 'Is $f(x,y)=1/x$ continuous at $(0,0)$?',
        steps: ['$f(0,0)=1/0$ is undefined, so the function is not continuous there.'],
        answer: 'No',
      },
      {
        question: 'Find $f_x$ and $f_y$ for $f(x,y)=x^2\\sin y$.',
        steps: ['$f_x=2x\\sin y$', '$f_y=x^2\\cos y$'],
        answer: '$f_x=2x\\sin y$, $f_y=x^2\\cos y$',
      },
      {
        question: 'Find $f_x$ for $f(x,y)=5x^3+2xy^2$.',
        steps: ['$15x^2+2y^2$'],
        answer: '$15x^2+2y^2$',
      },
    ],
    cram: {
      top: [
        'Computing $f_x$ and $f_y$',
        'Chain rule on partials',
        'Three continuity conditions',
        'Path test for limits',
        'Log / trig partials',
      ],
      min30: 'Ten mixed partials: poly, log, trig.',
      min15: 'Continuity conditions plus product/chain rules.',
      min5: '$f_x$ freezes $y$; $f_y$ freezes $x$.',
    },
  },
]
