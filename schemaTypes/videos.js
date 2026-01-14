export default {
    name: 'videos',
    title: 'Videos',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'videos',
        title: 'Videos',
        type: 'array',
        of: [
          { 
            type: 'file',
            options: {
              accept: 'video/*', // 接受所有影片檔案
            },
          }
        ],
      },
    ]
}