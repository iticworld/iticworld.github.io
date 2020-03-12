
const __degree = 57.295779513082320876798154814105;
const __radian = 0.01745329251994329576923690768489;

class Vector
{

    static degree(o)
    {
        let result = [0, 0, 0, 0];
        result[0] = o[0] * __degree;
        result[1] = o[1] * __degree;
        result[2] = o[2] * __degree;
        result[3] = o[3] * __degree;
        return result;
    }

    static radian(o)
    {
        let result = [0, 0, 0, 0];
        result[0] = o[0] * __radian;
        result[1] = o[1] * __radian;
        result[2] = o[2] * __radian;
        result[3] = o[3] * __radian;
        return result;
    }

    static dot(x, y)
    {
        let result = 0;
        for(let i = 0; i < 4; i++)
        {
            result += (x[i] * y[i]);
        }
        return result;
    }

    static normalize(o)
    {
        let dot = Math.sqrt(Vector.dot(o, o));
        let result = [0, 0, 0, 0];
        for(let i = 0; i < 4; i++)
        {
            result[i] = (o[i]/dot);
        }
        return result;
    }

    static cross(x, y)
    {
        let result = [0, 0, 0, 0];
        result[0] = (x[1] * y[2] - x[2] * y[1]);
        result[1] = (x[2] * y[0] - x[0] * y[2]);
        result[2] = (x[0] * y[1] - x[1] * y[0]);
        return result;
    }

    static minus(x, y)
    {
        let result = [0, 0, 0, 0];
        for(let i = 0; i < 4; i++)
        {
            result[i] = (x[i] - y[i]);
        }
        return result;
    }

    static plus(x, y)
    {
        let result = [0, 0, 0, 0];
        for(let i = 0; i < 4; i++)
        {
            result[i] = (x[i] + y[i]);
        }
        return result;
    }

    static multiply(v, c)
    {
        let result = [0, 0, 0, 0];
        for(let i = 0; i < 4; i++)
        {
            result[i] = v[i] * c;
        }
        return result;
    }
}


class Matrix
{
    static deepcopy(m)
    {
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for(let i = 0; i < result.length; i++)
        {
            result[i] = m[i];
        }
        return result;
    }

    static identity()
    {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }

    static zero()
    {
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    static lookat(eye, center, up)
    {
        let f = Vector.normalize(Vector.minus(center, eye));
        let s = Vector.normalize(Vector.cross(f, up));
        let u = Vector.cross(s, f);
        let result = Matrix.identity();
        result[0 * 4 + 0] =  s[0];
        result[1 * 4 + 0] =  s[1];
        result[2 * 4 + 0] =  s[2];
        result[0 * 4 + 1] =  u[0];
        result[1 * 4 + 1] =  u[1];
        result[2 * 4 + 1] =  u[2];
        result[0 * 4 + 2] = -f[0];
        result[1 * 4 + 2] = -f[1];
        result[2 * 4 + 2] = -f[2];
        result[3 * 4 + 0] = -Vector.dot(s, eye);
        result[3 * 4 + 1] = -Vector.dot(u, eye);
        result[3 * 4 + 2] =  Vector.dot(f, eye);
        return result;
    }

    static perspective(fovy, aspect, near, far)
    {
        let half = Math.tan(fovy / 2.0);
        let result = Matrix.zero();
        result[        0] = 1.0 / (aspect * half);
        result[    4 + 1] = 1.0 / half;
        result[2 * 4 + 2] = (far + near) / (near - far);
        result[2 * 4 + 3] = -1.0;
        result[3 * 4 + 2] = -(2.0 * far * near) / (far - near);
        return result;
    }

    static multiply(x, y)
    {
        let result = Matrix.zero();
        result[0 * 4 + 0] = x[0 * 4 + 0] * y[0 * 4 + 0] + x[0 * 4 + 1] * y[1 * 4 + 0] + x[0 * 4 + 2] * y[2 * 4 + 0] + x[0 * 4 + 3] * y[3 * 4 + 0];
        result[0 * 4 + 1] = x[0 * 4 + 0] * y[0 * 4 + 1] + x[0 * 4 + 1] * y[1 * 4 + 1] + x[0 * 4 + 2] * y[2 * 4 + 1] + x[0 * 4 + 3] * y[3 * 4 + 1];
        result[0 * 4 + 2] = x[0 * 4 + 0] * y[0 * 4 + 2] + x[0 * 4 + 1] * y[1 * 4 + 2] + x[0 * 4 + 2] * y[2 * 4 + 2] + x[0 * 4 + 3] * y[3 * 4 + 2];
        result[0 * 4 + 3] = x[0 * 4 + 0] * y[0 * 4 + 3] + x[0 * 4 + 1] * y[1 * 4 + 3] + x[0 * 4 + 2] * y[2 * 4 + 3] + x[0 * 4 + 3] * y[3 * 4 + 3];

        result[1 * 4 + 0] = x[1 * 4 + 0] * y[0 * 4 + 0] + x[1 * 4 + 1] * y[1 * 4 + 0] + x[1 * 4 + 2] * y[2 * 4 + 0] + x[1 * 4 + 3] * y[3 * 4 + 0];
        result[1 * 4 + 1] = x[1 * 4 + 0] * y[0 * 4 + 1] + x[1 * 4 + 1] * y[1 * 4 + 1] + x[1 * 4 + 2] * y[2 * 4 + 1] + x[1 * 4 + 3] * y[3 * 4 + 1];
        result[1 * 4 + 2] = x[1 * 4 + 0] * y[0 * 4 + 2] + x[1 * 4 + 1] * y[1 * 4 + 2] + x[1 * 4 + 2] * y[2 * 4 + 2] + x[1 * 4 + 3] * y[3 * 4 + 2];
        result[1 * 4 + 3] = x[1 * 4 + 0] * y[0 * 4 + 3] + x[1 * 4 + 1] * y[1 * 4 + 3] + x[1 * 4 + 2] * y[2 * 4 + 3] + x[1 * 4 + 3] * y[3 * 4 + 3];

        result[2 * 4 + 0] = x[2 * 4 + 0] * y[0 * 4 + 0] + x[2 * 4 + 1] * y[1 * 4 + 0] + x[2 * 4 + 2] * y[2 * 4 + 0] + x[2 * 4 + 3] * y[3 * 4 + 0];
        result[2 * 4 + 1] = x[2 * 4 + 0] * y[0 * 4 + 1] + x[2 * 4 + 1] * y[1 * 4 + 1] + x[2 * 4 + 2] * y[2 * 4 + 1] + x[2 * 4 + 3] * y[3 * 4 + 1];
        result[2 * 4 + 2] = x[2 * 4 + 0] * y[0 * 4 + 2] + x[2 * 4 + 1] * y[1 * 4 + 2] + x[2 * 4 + 2] * y[2 * 4 + 2] + x[2 * 4 + 3] * y[3 * 4 + 2];
        result[2 * 4 + 3] = x[2 * 4 + 0] * y[0 * 4 + 3] + x[2 * 4 + 1] * y[1 * 4 + 3] + x[2 * 4 + 2] * y[2 * 4 + 3] + x[2 * 4 + 3] * y[3 * 4 + 3];

        result[3 * 4 + 0] = x[3 * 4 + 0] * y[0 * 4 + 0] + x[3 * 4 + 1] * y[1 * 4 + 0] + x[3 * 4 + 2] * y[2 * 4 + 0] + x[3 * 4 + 3] * y[3 * 4 + 0];
        result[3 * 4 + 1] = x[3 * 4 + 0] * y[0 * 4 + 1] + x[3 * 4 + 1] * y[1 * 4 + 1] + x[3 * 4 + 2] * y[2 * 4 + 1] + x[3 * 4 + 3] * y[3 * 4 + 1];
        result[3 * 4 + 2] = x[3 * 4 + 0] * y[0 * 4 + 2] + x[3 * 4 + 1] * y[1 * 4 + 2] + x[3 * 4 + 2] * y[2 * 4 + 2] + x[3 * 4 + 3] * y[3 * 4 + 2];
        result[3 * 4 + 3] = x[3 * 4 + 0] * y[0 * 4 + 3] + x[3 * 4 + 1] * y[1 * 4 + 3] + x[3 * 4 + 2] * y[2 * 4 + 3] + x[3 * 4 + 3] * y[3 * 4 + 3];
        return result;
    }

    static translate(m, v)
    {
        let result = Matrix.deepcopy(m);
        result[3 * 4 + 0] = m[0 * 4 + 0] * v[0] + m[1 * 4 + 0] * v[1] + m[2 * 4 + 0] * v[2] + m[3 * 4 + 0];
        result[3 * 4 + 1] = m[0 * 4 + 1] * v[0] + m[1 * 4 + 1] * v[1] + m[2 * 4 + 1] * v[2] + m[3 * 4 + 1];
        result[3 * 4 + 2] = m[0 * 4 + 2] * v[0] + m[1 * 4 + 2] * v[1] + m[2 * 4 + 2] * v[2] + m[3 * 4 + 2];
        result[3 * 4 + 3] = m[0 * 4 + 3] * v[0] + m[1 * 4 + 3] * v[1] + m[2 * 4 + 3] * v[2] + m[3 * 4 + 3];
        return result;
    }

    static rotate(m, angle, v)
    {
        let c = Math.cos(angle);
        let s = Math.sin(angle);
        let axis = Vector.normalize(v);
        let temp = Vector.multiply(axis, (1 - c));
        let rotation = Matrix.zero();

        rotation[0 * 4 + 0] = c + temp[0] * axis[0];
        rotation[0 * 4 + 1] = temp[0] * axis[1] + s * axis[2];
        rotation[0 * 4 + 2] = temp[0] * axis[2] - s * axis[1];

        rotation[1 * 4 + 0] = temp[1] * axis[0] - s * axis[2];
        rotation[1 * 4 + 1] = c + temp[1] * axis[1];
        rotation[1 * 4 + 2] = temp[1] * axis[2] + s * axis[0];

        rotation[2 * 4 + 0] = temp[2] * axis[0] + s * axis[1];
        rotation[2 * 4 + 1] = temp[2] * axis[1] - s * axis[0];
        rotation[2 * 4 + 2] = c + temp[2] * axis[2];

        let result = Matrix.zero();

        result[0 * 4 + 0] = m[0 * 4 + 0] * rotation[0 * 4 + 0] + m[1 * 4 + 0] * rotation[0 * 4 + 1] + m[2 * 4 + 0] * rotation[0 * 4 + 2];
        result[0 * 4 + 1] = m[0 * 4 + 1] * rotation[0 * 4 + 0] + m[1 * 4 + 1] * rotation[0 * 4 + 1] + m[2 * 4 + 1] * rotation[0 * 4 + 2];
        result[0 * 4 + 2] = m[0 * 4 + 2] * rotation[0 * 4 + 0] + m[1 * 4 + 2] * rotation[0 * 4 + 1] + m[2 * 4 + 2] * rotation[0 * 4 + 2];
        result[0 * 4 + 3] = m[0 * 4 + 3] * rotation[0 * 4 + 0] + m[1 * 4 + 3] * rotation[0 * 4 + 1] + m[2 * 4 + 3] * rotation[0 * 4 + 2];

        result[1 * 4 + 0] = m[0 * 4 + 0] * rotation[1 * 4 + 0] + m[1 * 4 + 0] * rotation[1 * 4 + 1] + m[2 * 4 + 0] * rotation[1 * 4 + 2];
        result[1 * 4 + 1] = m[0 * 4 + 1] * rotation[1 * 4 + 0] + m[1 * 4 + 1] * rotation[1 * 4 + 1] + m[2 * 4 + 1] * rotation[1 * 4 + 2];
        result[1 * 4 + 2] = m[0 * 4 + 2] * rotation[1 * 4 + 0] + m[1 * 4 + 2] * rotation[1 * 4 + 1] + m[2 * 4 + 2] * rotation[1 * 4 + 2];
        result[1 * 4 + 3] = m[0 * 4 + 3] * rotation[1 * 4 + 0] + m[1 * 4 + 3] * rotation[1 * 4 + 1] + m[2 * 4 + 3] * rotation[1 * 4 + 2];

        result[2 * 4 + 0] = m[0 * 4 + 0] * rotation[2 * 4 + 0] + m[1 * 4 + 0] * rotation[2 * 4 + 1] + m[2 * 4 + 0] * rotation[2 * 4 + 2];
        result[2 * 4 + 1] = m[0 * 4 + 1] * rotation[2 * 4 + 0] + m[1 * 4 + 1] * rotation[2 * 4 + 1] + m[2 * 4 + 1] * rotation[2 * 4 + 2];
        result[2 * 4 + 2] = m[0 * 4 + 2] * rotation[2 * 4 + 0] + m[1 * 4 + 2] * rotation[2 * 4 + 1] + m[2 * 4 + 2] * rotation[2 * 4 + 2];
        result[2 * 4 + 3] = m[0 * 4 + 3] * rotation[2 * 4 + 0] + m[1 * 4 + 3] * rotation[2 * 4 + 1] + m[2 * 4 + 3] * rotation[2 * 4 + 2];

        result[3 * 4 + 0] = m[3 * 4 + 0];
        result[3 * 4 + 1] = m[3 * 4 + 1];
        result[3 * 4 + 2] = m[3 * 4 + 2];
        result[3 * 4 + 3] = m[3 * 4 + 3];

        return result;
    }

    static scale(m, v)
    {
        let result = Matrix.zero();
        result[0 * 4 + 0] = m[0 * 4 + 0] * v[0];
        result[0 * 4 + 1] = m[0 * 4 + 1] * v[0];
        result[0 * 4 + 2] = m[0 * 4 + 2] * v[0];
        result[0 * 4 + 3] = m[0 * 4 + 3] * v[0];

        result[1 * 4 + 0] = m[1 * 4 + 0] * v[1];
        result[1 * 4 + 1] = m[1 * 4 + 1] * v[1];
        result[1 * 4 + 2] = m[1 * 4 + 2] * v[1];
        result[1 * 4 + 3] = m[1 * 4 + 3] * v[1];

        result[2 * 4 + 0] = m[2 * 4 + 0] * v[2];
        result[2 * 4 + 1] = m[2 * 4 + 1] * v[2];
        result[2 * 4 + 2] = m[2 * 4 + 2] * v[2];
        result[2 * 4 + 3] = m[2 * 4 + 3] * v[2];

        result[3 * 4 + 0] = m[3 * 4 + 0];
        result[3 * 4 + 1] = m[3 * 4 + 1];
        result[3 * 4 + 2] = m[3 * 4 + 2];
        result[3 * 4 + 3] = m[3 * 4 + 3];
        return result;
    }

    static vectorMultiply(m, v)
    {
        let result = [0, 0, 0, 0];
        result[0] = m[0 * 4 + 0] * v[0] + m[0 * 4 + 1] * v[1] + m[0 * 4 + 2] * v[2] + m[0 * 4 + 3] * v[3];
        result[1] = m[1 * 4 + 0] * v[0] + m[1 * 4 + 1] * v[1] + m[1 * 4 + 2] * v[2] + m[1 * 4 + 3] * v[3];
        result[2] = m[2 * 4 + 0] * v[0] + m[2 * 4 + 1] * v[1] + m[2 * 4 + 2] * v[2] + m[2 * 4 + 3] * v[3];
        result[3] = m[3 * 4 + 0] * v[0] + m[3 * 4 + 1] * v[1] + m[3 * 4 + 2] * v[2] + m[3 * 4 + 3] * v[3];
        return result;
    }
}


// const h = require

// import('/dist/js/matrix.bundle.js')
// console.log(import);

// import Matrix from './x/graphics/matrix.js';

const FORM = 1179603533;
const NORMAL = 1314016588;
const VERSION = 1447383635;
const CATEGORY = 1312902469;
const DATA = 1213615428;
const MATERIAL = 1398030676;
const TEXTURE = 1280133456;
const MULTIMESH = 1297435732;
const SINGLEMESH = 1112363848;
const GOBLINMESH = 1196376647;
const DETAIL = 1146376781;
const JOINTS = 1212761426;
const ENGINESHAPE = 1163154248;
const ENGINEBURN = 1112887886;
const NAVLIGHT = 1312904780;
const MARKER = 1297238866;
const HEAD = 1212498244;
const KEYFRAME = 1262836038;
const BOUNDARY = 1112425558;
const COLLISION = 1129270340;
const BOX = 1111641944;
const SPHERE = 1112756296;
const TRIANGLES = 1414678867;
const BASICMESH = 1112756813;
const DESCRIPTION = 1145393987;
const SUBDIVISION = 1397970242;
const NORMALS = 1447973453;
const INFORMATION = 1229866575;
const OWNER = 1331121746;

const MASK_POSITION = 1;
const MASK_NORMAL = 2;
const MASK_COLOR = 4;
const MASK_TEXTURE = 2040;
const MASK_HVERTEX = 2048;
const MASK_SVERTEX = 4096;
const MASK_TANGENT = 8192;
const MASK_BINORMAL = 16384;

class Stream
{
    constructor(data) {
        this.__data = data;
        this.__position = 0;
    }

    uinteger8() {
        let bytes = this.__data.subarray(this.__position, this.__position + 2);
        let array = Uint8Array.from(bytes);
        let view = new DataView(array.buffer);
        this.__position = this.__position + 1;
        return view.getUint8(0);
    }

    uinteger16(convert) {
        let bytes = this.__data.subarray(this.__position, this.__position + 2);
        let array = Uint8Array.from(bytes);
        let view = new DataView(array.buffer);
        this.__position = this.__position + 2;
        return view.getUint16(0, !convert);
    }

    uinteger32(convert) {
        let bytes = this.__data.subarray(this.__position, this.__position + 4);
        let array = Uint8Array.from(bytes);
        let view = new DataView(array.buffer);
        this.__position = this.__position + 4;
        return view.getUint32(0, !convert);
    }

    float32(convert) {
        let bytes = this.__data.subarray(this.__position, this.__position + 4);
        let array = Uint8Array.from(bytes);
        let view = new DataView(array.buffer);
        this.__position = this.__position + 4;
        return view.getFloat32(0, !convert);
    }

    float64(convert) {
        let bytes = this.__data.subarray(this.__position, this.__position + 8);
        let array = Uint8Array.from(bytes);
        let view = new DataView(array.buffer);
        this.__position = this.__position + 8;
        return view.getFloat64(0, !convert);
    }

    str(n) {
        let bytes = this.__data.subarray(this.__position, this.__position + n);
        let array = Uint8Array.from(bytes);
        this.__position = this.__position + n;
        return String.fromCharCode.apply(null, array);
    }

    data(n) {
        let bytes = this.__data.subarray(this.__position, this.__position + n);
        let array = Uint8Array.from(bytes);
        this.__position = this.__position + n;
        return array;
    }

    finish() { return this.__data.length <= this.__position; }
}

class Context
{
    constructor(stream, parent) {
        this.__type = stream.uinteger32(true);
        this.__size = stream.uinteger32(true);
        this.__id = 0;
        this.__version = 0;
        this.__position = 0;
        this.__parent = parent;
        if(this.__type === FORM)
        {
            this.__id = stream.uinteger32(true);
            this.__position += 4;
        }
        else if(this.__type === NORMAL)
        {
            this.__id = stream.uinteger32(true);
            this.__version = stream.uinteger32(true);
            this.__position += 8;
        }
        else
        {
            this.__id = this.__type;
        }
        if(this.__parent) {
            this.__parent.move(8);
        }

        // console.log({type: this.__type, size: this.__size, id: this.__id, version: this.__version, position: this.__position});
    }

    uinteger8(stream)
    {
        const value = stream.uinteger8();
        this.__position += 1;
        return value;
    }

    uinteger16(stream)
    {
        const value = stream.uinteger16();
        this.__position += 2;
        return value;
    }

    uinteger32(stream, convert) {
        const value = stream.uinteger32(convert);
        this.__position += 4;
        return value;
    }

    float32(stream) {
        const value = stream.float32();
        this.__position += 4;
        return value;
    }

    float64(stream) {
        const value = stream.float64();
        this.__position += 8;
        return value;
    }

    str(stream, n) {
        if(n) {
            const value = stream.str(n);
            this.__position += n;
            return value;
        } else {
            n = stream.uinteger32();
            this.__position += 4;
            const value = stream.str(n);
            this.__position += n;
            return value;
        }
    }

    data(stream, n) {
        if(n) {
            const value = stream.data(n);
            this.__position += n;
            return value;
        } else {
            const n = stream.uinteger32();
            this.__position += 4;
            const value = stream.data(n);
            this.__position += n;
            return value;
        }
    }

    get id() { return this.__id; }
    get size() { return this.__size; }
    get remain() { return this.__size - this.__position; }

    finish() { return this.__size === this.__position; }

    move(n) {
        this.__position += n;
    }
}

function version(root, stream) {
    const value = root.uinteger32(stream);
    postMessage({version: value});
    if(!root.finish()){ throw Error(); }
}

function category(root, stream) {
    const value = root.str(stream, root.remain);
    postMessage({category: value});
    if(!root.finish()){ throw Error(); }
}

function material(root, stream) {
    let o = {};
    o.name = root.str(stream);
    o.shader = root.str(stream);
    o.parameters = [];
    const total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        const type = root.uinteger32(stream);
        if(type === 5)
        {
            const data = root.data(stream);
            const name = root.str(stream);
            o.parameters.push({name, data});
            // TODO: MATERIAL
        }
        else
        {
            throw new Error();
        }
    }
    postMessage({material: o});
    if(!root.finish()){ throw Error(); }
}

function texture_size(width, height, mip, format) {
    if(format === 1146639413) {
        return Math.max(1, width >> (mip + 1)) * Math.max(1, height >> (mip + 1)) * 16;
        // return x::math::max<x::uint32>(1U, width >> (mip + 1U)) * x::math::max(1U, height >> (mip + 1U)) * 16U;
        // throw new Error();
    } else {
        throw new Error();
    }
}

function texture(root, stream) {
    let o = {};
    o.name = root.str(stream);
    o.format = root.uinteger32(stream, true);
    o.data = [];
    const total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        let mip = {};
        mip.width = root.uinteger32(stream);
        mip.height = root.uinteger32(stream);
        mip.data = root.data(stream, texture_size(mip.width, mip.height, 1, o.format));
        o.data.push(mip);
    }
    postMessage({texture: o});
    if(!root.finish()){ throw Error(); }
}

function serializeVertices(vertices)
{
    let array = [];
    let total = 0;

    vertices.forEach(vertex => {
        let result = [];
        result = result.concat(vertex.position,
                               vertex.normal,
                               vertex.color,
                               vertex.texture,
                               vertex.tangent,
                               vertex.binormal);
        array.push(new Float32Array(result));
        total += array[array.length - 1].length;
    });
    let o = new Float32Array(total);
    total = 0;
    array.forEach(value => {
        o.set(value, total);
        total += value.length;
    });
    return o;
}

function vertices(primitive, root, mask, stream) {
    let total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        console.log("vertex");
        let vertex = {};
        vertex.color = [0, 0, 0, 0];
        vertex.position = [0, 0, 0, 0];
        if(mask & MASK_POSITION)
        {
            const x = root.float32(stream);
            const y = root.float32(stream);
            const z = root.float32(stream);
            const w = root.float32(stream);
            vertex.position = [x, y, -z, w];
            vertex.position = Matrix.vectorMultiply(Matrix.rotate(Matrix.identity(), 180 * __radian, [0, 1, 0, 0]), vertex.position);
        }
        vertex.normal = [0, 0, 0, 0];
        if(mask & MASK_NORMAL)
        {
            const x = root.float32(stream);
            const y = root.float32(stream);
            const z = root.float32(stream);
            const w = root.float32(stream);
            vertex.normal = [x, y, -z, w];
            vertex.normal = Matrix.vectorMultiply(Matrix.rotate(Matrix.identity(), 180 * __radian, [0, 1, 0, 0]), vertex.normal);
        }
        vertex.diffuse = 0;
        if(mask & MASK_COLOR)
        {
            vertex.diffuse = root.uinteger32(stream);
        }
        vertex.texture = [0, 0];
        if(mask & MASK_TEXTURE)
        {
            const x = root.float32(stream);
            const y = root.float32(stream);
            vertex.texture = [x, y];
        }
        if(mask & MASK_HVERTEX)
        {
            throw new Error();
        }
        if(mask & MASK_SVERTEX)
        {
            throw new Error();
        }
        vertex.tangent = [0, 0, 0, 0];
        if(mask & MASK_TANGENT)
        {
            const x = root.float32(stream);
            const y = root.float32(stream);
            const z = root.float32(stream);
            vertex.tangent = [x, y, -z, 0];
            vertex.tangent = Matrix.vectorMultiply(Matrix.rotate(Matrix.identity(), 180 * __radian, [0, 1, 0, 0]), vertex.tangent);
        }
        vertex.binormal = [0, 0, 0, 0];
        if(mask & MASK_BINORMAL)
        {
            const x = root.float32(stream);
            const y = root.float32(stream);
            const z = root.float32(stream);
            vertex.binormal = [x, y, -z, 0];
            vertex.binormal = Matrix.vectorMultiply(Matrix.rotate(Matrix.identity(), 180 * __radian, [0, 1, 0, 0]), vertex.binormal);
        }
        primitive.vertices.push(vertex);
    }
    primitive.data = serializeVertices(primitive.vertices);

    total = root.uinteger16(stream);
    for(let i = 0; i < total; i++)
    {
        const type = root.uinteger32(stream);
        const count = root.uinteger32(stream);
        for(let j = 0; j < count; j++)
        {
            primitive.indices.push(root.uinteger16(stream));
        }
    }
}

function singlemesh(root, stream) {
    let o = {};
    o.level = root.uinteger32(stream);
    o.primitives = [];
    const total = root.uinteger32(stream);
    console.log("singlemesh");
    for(let i = 0; i < total; i++)
    {
        const index = root.uinteger32(stream);
        const mask = root.uinteger32(stream);
        let primitive = {};
        primitive.target = "array";
        primitive.usage = ["statical", "draw"];
        primitive.mode = "triangle";
        primitive.program = "standard";
        primitive.vertices = [];
        primitive.indices = [];
        vertices(primitive, root, mask, stream);
        o.primitives.push(primitive);
    }

    if(!root.finish()){ throw Error(); }
    return o;
}

function multimesh(root, stream)
{
    let multimesh = {};
    multimesh.name = root.str(stream);
    multimesh.parent = root.str(stream);
    multimesh.children = [];
    const total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        const context = new Context(stream, root);
        switch(context.id)
        {
            case SINGLEMESH: multimesh.children.push(singlemesh(context, stream)); break;
            default: throw new Error(); break;
        }
        root.move(context.size);
    }
    postMessage({multimesh});
    if(!root.finish()){ throw Error(); }
}

function goblinmesh(root, stream)
{
    let goblinmesh = {};
    goblinmesh.name = root.str(stream);
    goblinmesh.parent = root.str(stream);
    const context = new Context(stream, root);
    if(context.id === SINGLEMESH)
    {
        goblinmesh.singlemesh = singlemesh(context, stream);
        root.move(context.size);
    }
    else
    {
        throw new Error();
    }
    postMessage({goblinmesh});
    if(!root.finish()){ throw Error(); }
}

function data(root, stream) {
    while(!stream.finish() && !root.finish())
    {
        const context = new Context(stream, root);
        switch(context.id) {
            case MATERIAL: material(context, stream); break;
            case TEXTURE: texture(context, stream); break;
            case MULTIMESH: multimesh(context, stream); break;
            case GOBLINMESH: goblinmesh(context, stream); break;
            default: throw new Error();  break;
        }
        if(!context.finish()){ throw new Error(); }
        root.move(context.size);
    }
}

function joints(root, stream)
{
    let joints = [];
    const total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        let joint= {};
        joint.name = root.str(stream);
        joint.parent = root.str(stream);

        {
            const x = root.float32(stream);
            const y = root.float32(stream);
            const z = root.float32(stream);
            joint.position = [-x, y, z, 0];

        }

        {
            const x = root.float32(stream);
            const y = root.float32(stream);
            const z = root.float32(stream);
            joint.rotation = [-x, -y, z, 0];
            joint.rotation = Matrix.vectorMultiply(Matrix.rotate(Matrix.identity(), 180 * __radian, [0, 1, 0, 0]), joint.rotation);
        }

        {
            const x = root.float32(stream);
            const y = root.float32(stream);
            const z = root.float32(stream);
            joint.scale = [x, y, z, 0];
        }

        {
            const x = root.float32(stream);
            const y = root.float32(stream);
            const z = root.float32(stream);
            joint.axis = [-x, -y, z, 0];
            joint.axis = Matrix.vectorMultiply(Matrix.rotate(Matrix.identity(), 180 * __radian, [0, 1, 0, 0]), joint.axis);
        }

        {
            const x = root.uinteger8(stream);
            const y = root.uinteger8(stream);
            const z = root.uinteger8(stream);
            joint.freedom = [x, y, z, 0];
        }
        joints.push(joint);
    }
    postMessage({joints});
    if(!root.finish()){ throw Error(); }
}

function engineshape(root, stream)
{
    let engineshape = {};
    engineshape.name = root.str(stream);
    engineshape.parent = root.str(stream);
    engineshape.vertices = [];
    let total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        const x = root.float32(stream);
        const y = root.float32(stream);
        const z = root.float32(stream);
        engineshape.vertices.push({position: [x, y, z, 1.0 ]});
    }
    total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        const x = root.float32(stream);
        const y = root.float32(stream);
        const z = root.float32(stream);
        engineshape.vertices[i].normal = [x, y, z, 0.0 ];
    }
    postMessage({engineshape});
    if(!root.finish()){ throw Error(); }
}

function engineburn(root, stream)
{
    let engineburn = {};
    engineburn.name = root.str(stream);
    engineburn.parent = root.str(stream);
    const division = root.uinteger32(stream);
    const flames = root.uinteger32(stream);
    for(let i = 0; i < flames; i++)
    {
        for(let j = 0; j < division; j++)
        {
            const x = root.float32(stream);
            const y = root.float32(stream);
            const z = root.float32(stream);
        }
    }
    postMessage({engineburn});
    if(!root.finish()){ throw Error(); }
}

function navlight(root, stream)
{
    let navlights = [];
    const total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        let navlight = {};

        navlight.name = root.str(stream);
        navlight.section = root.uinteger32(stream);
        navlight.size = root.float32(stream);
        navlight.phase = root.float32(stream);
        navlight.frequency = root.float32(stream);
        navlight.style = root.str(stream);
        const r = root.float32(stream);
        const g = root.float32(stream);
        const b = root.float32(stream);
        const a = root.float32(stream);
        navlight.distance = root.float32(stream);
        navlight.visible = root.uinteger8(stream);
        navlight.highend = root.uinteger8(stream);

        navlights.push(navlight);
    }
    postMessage({navlights});
    if(!root.finish()){ throw Error(); }
}

function markerhead(root, stream)
{
    let head = {};
    head.name = root.str(stream);
    head.parent = root.str(stream);
    head.start = root.float32(stream);
    head.end = root.float32(stream);
    head.position = {};
    head.position.x = root.float64(stream);
    head.position.y = root.float64(stream);
    head.position.z = root.float64(stream);
    head.rotation = {};
    head.rotation.x = root.float64(stream);
    head.rotation.y = root.float64(stream);
    head.rotation.z = root.float64(stream);
    if(!root.finish()){ throw Error(); }
    return head;
}

function boundary(root, stream)
{
    let boundary = {};
    boundary.name = root.str(stream);
    boundary.parent = root.str(stream);
    boundary.position = [];
    const total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        const x = root.float32(stream);
        const y = root.float32(stream);
        const z = root.float32(stream);
        boundary.position.push([x, y, z]);
    }
    boundary.information = root.uinteger32(stream);
    if(!root.finish()){ throw Error(); }
    return boundary;
}

function keyframe(root, stream)
{
    let keyframe = { boundary: [] };
    while(!root.finish())
    {
        const context = new Context(stream, root);
        switch(context.id)
        {
            case BOUNDARY: keyframe.boundary.push(boundary(context, stream)); break;
            default: throw new Error(); break;
        }
        root.move(context.size);
    }
    return keyframe;
}

function marker(root, stream)
{
    let marker = { head: [], keyframe: []};
    while(!root.finish())
    {
        let context = new Context(stream, root);
        switch(context.id)
        {
            case HEAD:      marker.head.push(markerhead(context, stream));  break;
            case KEYFRAME:  marker.keyframe.push(keyframe(context, stream)); break;
            default: throw new Error(); break;
        }
        root.move(context.size);
    }
    postMessage({marker});
    if(!root.finish()){ throw Error(); }
}

function box(root, stream)
{
    let box = { min: {}, max: {} };
    box.min.x = root.float32(stream);
    box.min.y = root.float32(stream);
    box.min.z = root.float32(stream);
    box.max.x = root.float32(stream);
    box.max.y = root.float32(stream);
    box.max.z = root.float32(stream);
    if(!root.finish()){ throw Error(); }
    return box;
}

function sphere(root, stream)
{
    let sphere = {};
    sphere.x = root.float32(stream);
    sphere.y = root.float32(stream);
    sphere.z = root.float32(stream);
    sphere.radius = root.float32(stream);
    if(!root.finish()){ throw Error(); }
    return sphere;
}

function triangle(root, stream)
{
    let triangle = { position: [], indices: []};
    let total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        const x = root.float32(stream);
        const y = root.float32(stream);
        const z = root.float32(stream);
        triangle.position.push([x, y, z]);
    }
    total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        triangle.position.push(root.uinteger16(stream));
    }
    if(!root.finish()){ throw Error(); }
    return triangle;
}

function collision(root, stream)
{
    let collision = { box: [], sphere: [], triangle: []};
    collision.name = root.str(stream);
    while(!root.finish())
    {
        const context = new Context(stream, root);
        switch(context.id)
        {
            case BOX: collision.box.push(box(context, stream)); break;
            case SPHERE: collision.sphere.push(sphere(context, stream)); break;
            case TRIANGLES: collision.triangle.push(triangle(context, stream)); break;
            default: throw new Error(); break;
        }
        root.move(context.size);
    }
    postMessage({collision});
}

function description(root, stream)
{
    let description = {};
    description.name = root.str(stream);
    description.parent = root.str(stream);
    description.level = root.uinteger32(stream);
    if(!root.finish()){ throw Error(); }
    return description;
}

function subdivision(root, stream)
{
    let subdivision = { indices: []};
    subdivision.x = root.uinteger32(stream);
    subdivision.y = root.uinteger32(stream);
    subdivision.z = root.uinteger32(stream);
    for(let i = 0; i < subdivision.z; i++)
    {
        for(let j = 0; j < subdivision.y; j++)
        {
            for(let k = 0; k < subdivision.x; k++)
            {
                const total = root.uinteger32(stream);
                for(let l = 0; l < total; l++)
                {
                    subdivision.indices.push(root.uinteger16(stream));
                }
            }
        }
    }
    if(!root.finish()){ throw Error(); }
    return subdivision;
}

function normals(root, stream)
{
    let normal = {};
    let total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        const x = root.float32(stream);
        const y = root.float32(stream);
        const z = root.float32(stream);
    }
    total = root.uinteger32(stream);
    for(let i = 0; i < total; i++)
    {
        const index = root.uinteger16(stream);
    }
    if(!root.finish()){ throw Error(); }
    return normal;
}

function basicmesh(root, stream)
{
    let basicmesh = { description: [], box: [], sphere: [], triangle: [], subdivision: [], normals: []};
    while(!root.finish())
    {
        const context = new Context(stream, root);
        switch(context.id)
        {
            case DESCRIPTION: basicmesh.description.push(description(context, stream)); break;
            case BOX: basicmesh.box.push(box(context, stream)); break;
            case SPHERE: basicmesh.sphere.push(sphere(context, stream)); break;
            case TRIANGLES: basicmesh.triangle.push(triangle(context, stream)); break;
            case SUBDIVISION: basicmesh.subdivision.push(subdivision(context, stream)); break;
            case NORMALS: basicmesh.normals.push(normals(context, stream)); break;
            default: throw new Error(); break;
        }
        root.move(context.size);
    }
    if(!root.finish()){ throw Error(); }
    postMessage({basicmesh});
}

function detail(root, stream)
{
    while(!stream.finish() && !root.finish())
    {
        const context = new Context(stream, root);
        switch(context.id)
        {
            case JOINTS: joints(context, stream); break;
            case ENGINESHAPE: engineshape(context, stream); break;
            case ENGINEBURN: engineburn(context, stream); break;
            case NAVLIGHT: navlight(context, stream); break;
            case MARKER: marker(context, stream); break;
            case BOUNDARY: postMessage({boundary: boundary(context, stream)}); break;
            case COLLISION: collision(context, stream); break;
            case BASICMESH: basicmesh(context, stream); break;
            default: console.log(context.id);  throw new Error();  break;
        }
        root.move(context.size);
    }
}

function information(root, stream)
{
    let information = {};
    while(!root.finish())
    {
        const context = new Context(stream, root);
        switch(context.id)
        {
            case OWNER: information.owner = context.str(stream); break;
            default: throw new Error(); break;
        }
        root.move(context.size);
    }
    postMessage({information});
}

function deserialize(o) {
    const stream = new Stream(new Uint8Array(o));

    while(!stream.finish()) {
        const context = new Context(stream);
        switch(context.id) {
            case VERSION: version(context, stream); break;
            case CATEGORY: category(context, stream); break;
            case DATA: data(context, stream); break;
            case DETAIL: detail(context, stream); break;
            case INFORMATION: information(context, stream); break;
            default: throw new Error();  break;
        }
    }

    // console.log(data);
    postMessage({finish: true});
}

function error(e) {
    postMessage({finish: true, error: e});
}

onmessage = (event) => {
    if(event.data.path) {
        fetch(event.data.path)
            .then(o => o.blob())
            .then(o => o.arrayBuffer())
            .then(deserialize)
            .catch(error);
    }
};
