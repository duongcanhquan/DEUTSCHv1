import { DATA_A1_KAP1 } from './a1/kapitel1_vocab';
import { DATA_A1_KAP2 } from './a1/kapitel2_vocab';
import { DATA_A1_KAP3 } from './a1/kapitel3_vocab';
import { DATA_A1_KAP4 } from './a1/kapitel4_vocab';
import { DATA_A1_KAP5 } from './a1/kapitel5_vocab';
import { DATA_A1_KAP6 } from './a1/kapitel6_vocab';
import { DATA_A1_KAP7 } from './a1/kapitel7_vocab';
import { DATA_A1_KAP8 } from './a1/kapitel8_vocab';
import { DATA_A1_KAP9 } from './a1/kapitel9_vocab';
import { DATA_A1_KAP10 } from './a1/kapitel10_vocab';
import { DATA_A1_KAP11 } from './a1/kapitel11_vocab';
import { DATA_A1_KAP12 } from './a1/kapitel12_vocab';

// Import Grammar A1
import { GRAMMAR_A1_L1 } from './a1/grammar_lektion1';
import { GRAMMAR_A1_L2 } from './a1/grammar_lektion2';
import { GRAMMAR_A1_L3 } from './a1/grammar_lektion3';
import { GRAMMAR_A1_L4 } from './a1/grammar_lektion4';
import { GRAMMAR_A1_L5 } from './a1/grammar_lektion5';
import { GRAMMAR_A1_L6 } from './a1/grammar_lektion6';
import { GRAMMAR_A1_L7 } from './a1/grammar_lektion7';
import { GRAMMAR_A1_L8 } from './a1/grammar_lektion8';

// Import Grammar A2
import { GRAMMAR_A2_L1 } from './a2/grammar_lektion1';
import { GRAMMAR_A2_L2 } from './a2/grammar_lektion2';
import { GRAMMAR_A2_L3 } from './a2/grammar_lektion3';
import { GRAMMAR_A2_L4 } from './a2/grammar_lektion4';
import { GRAMMAR_A2_L5 } from './a2/grammar_lektion5';
import { GRAMMAR_A2_L6 } from './a2/grammar_lektion6';
import { GRAMMAR_A2_L7 } from './a2/grammar_lektion7';
import { GRAMMAR_A2_L8 } from './a2/grammar_lektion8';

// Import Practical
import { DATA_PRACTICAL_NAIL } from './practical/nail_beauty';
import { DATA_PRACTICAL_SUPERMARKET } from './practical/supermarket';

export const ALL_COURSES = {
    A1: {
        vocabulary: [
            DATA_A1_KAP1, DATA_A1_KAP2, DATA_A1_KAP3, DATA_A1_KAP4,
            DATA_A1_KAP5, DATA_A1_KAP6, DATA_A1_KAP7, DATA_A1_KAP8,
            DATA_A1_KAP9, DATA_A1_KAP10, DATA_A1_KAP11, DATA_A1_KAP12
        ],
        grammar: [
            GRAMMAR_A1_L1, GRAMMAR_A1_L2, GRAMMAR_A1_L3, GRAMMAR_A1_L4,
            GRAMMAR_A1_L5, GRAMMAR_A1_L6, GRAMMAR_A1_L7, GRAMMAR_A1_L8
        ]
    },
    A2: {
        vocabulary: [], // To be added
        grammar: [
            GRAMMAR_A2_L1, GRAMMAR_A2_L2, GRAMMAR_A2_L3, GRAMMAR_A2_L4,
            GRAMMAR_A2_L5, GRAMMAR_A2_L6, GRAMMAR_A2_L7, GRAMMAR_A2_L8
        ]
    },
    B1: { vocabulary: [], grammar: [] },
    ReviewB1: { practice: [], memory: [] },
    Practical: { scenarios: [DATA_PRACTICAL_NAIL, DATA_PRACTICAL_SUPERMARKET] }
};
