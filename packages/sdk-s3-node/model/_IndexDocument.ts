import {Structure as _Structure_} from '@aws/types';

export const _IndexDocument: _Structure_ = {
    type: 'structure',
    required: [
        'Suffix',
    ],
    members: {
        Suffix: {
            shape: {
                type: 'string',
            },
        },
    },
};