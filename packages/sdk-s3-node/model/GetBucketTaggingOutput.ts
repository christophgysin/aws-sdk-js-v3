import {_TagSet} from './_TagSet';
import {Structure as _Structure_} from '@aws/types';

export const GetBucketTaggingOutput: _Structure_ = {
    type: 'structure',
    required: [
        'TagSet',
    ],
    members: {
        TagSet: {
            shape: _TagSet,
        },
    },
};