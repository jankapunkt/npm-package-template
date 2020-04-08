## Classes

<dl>
<dt><a href="#SuperTool">SuperTool</a></dt>
<dd><p>The super tool class. Holds a state and implements the execute command.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#exists">exists</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true of a given parameter is not null and not undefined.</p>
</dd>
</dl>

<a name="SuperTool"></a>

## SuperTool
The super tool class. Holds a state and implements the execute command.

**Kind**: global class  

* [SuperTool](#SuperTool)
    * [new SuperTool(state)](#new_SuperTool_new)
    * _instance_
        * [.state(value)](#SuperTool+state) ⇒ <code>String</code>
        * [.execute()](#SuperTool+execute) ⇒ <code>string</code>
    * _static_
        * [.states](#SuperTool.states) ⇒ <code>Object</code>
        * [.validateState(value)](#SuperTool.validateState)

<a name="new_SuperTool_new"></a>

### new SuperTool(state)
Constructor initializes the state. If none is given, it defaults to {'great'}.

**Throws**:

- if state is not a valid state


| Param | Description |
| --- | --- |
| state | one of the SuperTool.state values |

<a name="SuperTool+state"></a>

### superTool.state(value) ⇒ <code>String</code>
Validates and sets a new state value if given and returns the updated value. If no defined value is given it just returns the
current state value.

**Kind**: instance method of [<code>SuperTool</code>](#SuperTool)  
**Returns**: <code>String</code> - the current state value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> \| <code>undefined</code> | optional state to be set. |

<a name="SuperTool+execute"></a>

### superTool.execute() ⇒ <code>string</code>
Executes with the current internal state.

**Kind**: instance method of [<code>SuperTool</code>](#SuperTool)  
**Returns**: <code>string</code> - the execution including the current state.  
<a name="SuperTool.states"></a>

### SuperTool.states ⇒ <code>Object</code>
The possible states of the SuperTool.

**Kind**: static property of [<code>SuperTool</code>](#SuperTool)  
<a name="SuperTool.validateState"></a>

### SuperTool.validateState(value)
Validates a state. To be valid, the value needs to be part of the {SuperTool.states}.
Throws an Error if invalid. Returns void / undefined if passed.

**Kind**: static method of [<code>SuperTool</code>](#SuperTool)  
**Throws**:

- if state is not a valid state


| Param | Description |
| --- | --- |
| value | The state candidate to be validated. |

<a name="exists"></a>

## exists ⇒ <code>boolean</code>
Returns true of a given parameter is not null and not undefined.

**Kind**: global constant  
**Returns**: <code>boolean</code> - true if defined, otherwise false  

| Param | Description |
| --- | --- |
| any | any input is feasible |

