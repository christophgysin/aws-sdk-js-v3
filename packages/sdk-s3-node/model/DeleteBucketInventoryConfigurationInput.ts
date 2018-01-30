import {Structure as _Structure_} from '@aws/types';

export const DeleteBucketInventoryConfigurationInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Id',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        Id: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'id',
        },
    },
};