import {Structure as _Structure_} from '@aws/types';

export const _Tag: _Structure_ = {
    type: 'structure',
    required: [
        'Key',
        'Value',
    ],
    members: {
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Value: {
            shape: {
                type: 'string',
            },
        },
    },
};