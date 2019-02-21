# graphql-demo

# 查询
query list{
  todolist{
    id,
    item_name,
    status
  }
}

# 参数查询
query item{
  item(id:2){
    id,
    item_name,
    status
  }
}

# 新增
mutation add{
  createItem(id: 3, item_name: "SCRM线上咨询", status: false) {
    id
    item_name
    status
  }
}

# 修改
mutation updata{
  updateItem(id: 3, item_name: "小程序IM", status: true) {
    id
    item_name
    status
  }
}

# 删除
mutation del{
  deleteItem(id: 3) {
    id
  }
}