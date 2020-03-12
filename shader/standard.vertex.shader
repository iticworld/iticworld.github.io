attribute vec4 vertexPosition;
attribute vec4 vertexNormal;
uniform mat4 mvp;
varying vec4 Normal;
varying vec4 FragPos;
void main(){
    gl_Position = mvp * vertexPosition;
    FragPos = vertexPosition;
    Normal = vertexNormal;
}
