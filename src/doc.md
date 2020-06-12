```
"assets": ["**/*.graphql"]
```

```
type Query {
  findComponent: [Component]
  findRelation: [Relation]
  findModuleRelationById(id: Int!): Relation
  findByModuleId(moduleId: Int!): [Relation]
}
```

```
{
 	findByModuleId(moduleId: 528) {
    component_id,
    component {
      name,
      label,
      attribute
    }
  }
}
```


```
scalar Date

type Query {
  getComponent: Component
  findByModuleId(moduleId: Int!): [Relation]
  findModuleByType(type: String!): Block
}

type Component {
  id: Int
  label: String
  name: String
  type: String
  attribute: String
  origin_attribute: String
  event_type: Int
  event_url: String
  transform_rule: String
  business_type: Int
  client_type: Int
  not_img: String
  creator: String
  modifier: String
  gmt_created: Date
  gmt_modified: Date
  is_deleted: String

}


type Relation {
  id: Int
  metadata_module_id: Int
  component_id: Int
  component_parent_id: Int
  component_order: Int
  origin_attribute: String
  is_default: String
  creator: String
  modifier: String
  gmt_created: Date
  gmt_modified: Date
  is_deleted: String
  component: Component[]
}
```


```
{
  findModuleByType(type: "healthImgsModule") {
    label,
    id,
  	module {
  		component_id,
      component {
        name,
        label
      }
    }
  }
}
```