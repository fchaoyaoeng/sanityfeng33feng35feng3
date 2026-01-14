export default {
    name: 'musics',
    title: 'Musics',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'musics',
        title: 'Musics',
        type: 'array',
        of: [
          { 
            type: 'file',
            options: {
              accept: 'audio/*', // 限制為所有音訊檔案
            },
          }
        ],
      },
    ]
}