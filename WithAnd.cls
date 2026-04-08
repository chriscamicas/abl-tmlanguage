class WithAnd:

define temp-table tt no-undo
field f1 as char
field f2 as char
field f3 as char.

   method protected logical  And(plArg as logical):
     message 'arg=' plarg.
   end method.
   
   constructor public WithAnd():
   FIND tt WHERE tt.f1 = "a"
             AND (tt.f2 = "b" OR tt.f2 = "c")
                       AND tt.f3 = "d"
                               NO-LOCK NO-ERROR.

 message
    this-object:And(yes)    skip
    this-object:And(available tt)
                               view-as alert-box.
   end.   

end class.