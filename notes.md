
## Voting Demo
## Being an 'expert'
## Who uses redux?
- uber, postman, paypal, patreonm opengov, rackspace, ncr, puralsight, firefox dev tools, docker, khan academy
## Immutable Data
- ### What is immutable?
  - Persistent Data Structure(Not to be confused with persistent storage)
  - Characateristics:
    1. preserves previous version
    2. returns new updated structure
- ### Which problems does it solve?
  - magic 8balls vs blackboxes
  - the problem when variables are all pointers to the same data

    ```js
    > obj1 = {a:1}
    { a: 1 }
    > obj2 =  obj1
    { a: 1 }
    > obj2 === obj1
    true
    > obj2.a = 2
    2
    > obj2
    { a: 2 }
    > obj1
    { a: 2 }
    > obj2===obj1
    true
    > var Im = require('immutable')
    > Im.MAp
    > Im.Map
    { [Function: Map] of: [Function], isMap: [Function: isMap] }
    > map1 = Im.fromJS({a:1})
    Map { "a": 1 }
    > map2 = map1
    Map { "a": 1 }
    > map2 === map1
    true
    > map2= map2.set('a', 2)
    Map { "a": 2 }
    > map2
    Map { "a": 2 }
    > map1
    Map { "a": 1 }
    > map2===map1
    false
    > map3
    Map { "a": 1 }
    > map3 = map1.set('a', 1) //does not create new structure map3 is now a pointer since they are identical
    Map { "a": 1 }
    > map3 == map1
    true
    ```
  - Dirty Bits: Tracking whats changed
    ```js
    const data = {
      dirty: false,
      _raw: {key: "value"},
      set: function(key, newValue){
        this.dirty = true,
        this._raw.key = newValue
      }
    }

    function renderHeader(data){
      if(!data.dirty) return
      data.dirty = false
      //some stuff  
    }

    function renderSidebar() {
      if(!data.dirty) return
      data.dirty = false
      //some stuff  
    }
    data.set('key', 'newValue')
    renderHeader(data) //set flag back to true but it could still be dirty to another component
    renderSidebar(data) //???
    ```

  - no more copying/cloning to make sure its not pointing somewhere
  - better memoization
  - and you can detect changes more easily

### Immutable Functions Used today:


- Converts to plain JS: `map.toJS()`
- Converts to immutable: `fromJS(map)`
- Initializes new immutable:  `map.set({currentNumber:0})`
- Get a value:  `map.get('currentNumber')`
- Update values: `update('currentNumber', currentNumber => currentNumber + 1)`
- Merge Values:
```js
> obj={b:2}
{ b: 2 }
> map = Im.Map({a:1})
Map { "a": 1 }
> mergedMap = map.merge(obj)
Map { "a": 1, "b": 2 }
```

## Test-First Development

## Firebase Integration
  - Persistent Storage vs. Persistent Structure
