/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.org.nativescript.widgets;

public class FileHelper_Callback extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider, org.nativescript.widgets.FileHelper.Callback {
  public FileHelper_Callback() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onError(java.lang.Exception param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onError", void.class, args);
  }

  public void onSuccess(java.lang.Object param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onSuccess", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
