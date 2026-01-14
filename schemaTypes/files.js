export default {
    name: 'files',
    title: 'Files',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'files',
        title: 'Files',
        type: 'array',
        of: [{ type: 'file' }], // 不限制檔案類型
      },
    ]
}