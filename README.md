
# Serenix.types.Type
SereniX.types.Type is an abstract class and the super class of many predefined type classes. SereniX.types.Type is usable for class creation using Klass.Class (that is in the librabry serenix_class_base.js) method
SereniX.types.Type has the following main statics methods:

- SereniX.types.Type.is : Checks if the given value is typeof of the given type or and instanceof of the given Type Class.

- SereniX.types.Type.forname : Returns the Type Class of the given type class name

- SereniX.types.Type.define Makes the given path corresponds to the given Type Class

# Predefined Type Classes

Below are the predefined Type Classes:

- SereniX.types.AnyType
- SereniX.types.WildcardType
- SereniX.types.SType //Sized Data Type
- SereniX.types.ArrayType
- SereniX.types.RefType
- SereniX.types.JoinType
- SereniX.types.ManyToManyJoinType
- SereniX.types.Enum
- SereniX.types.VType
- SereniX.types.Set
- SereniX.types.Interval
- SereniX.types.Types
- SereniX.types.Union
- SereniX.types.Minus
- SereniX.types.Intersect
- SereniX.types.Number
- SereniX.types.Integer
- SereniX.types.FloatingPointValue
- SereniX.types.String
- SereniX.types.LType
- SereniX.types.Boolean
- SereniX.types.Array
- SereniX.types.List
- SereniX.types.TList
- SereniX.types.OList
- SereniX.types.Pair
- SereniX.types.Map
- SereniX.types.ObjectType
- SereniX.types.VariableType
