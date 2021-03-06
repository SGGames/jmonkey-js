/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.jme3.texture {
    import InputCapsule = com.jme3.export.InputCapsule;

    import JmeExporter = com.jme3.export.JmeExporter;

    import JmeImporter = com.jme3.export.JmeImporter;

    import OutputCapsule = com.jme3.export.OutputCapsule;

    import ColorSpace = com.jme3.texture.image.ColorSpace;

    import IOException = java.io.IOException;

    /**
     * @author Maarten Steur
     */
    export class Texture3D extends Texture {
        private wrapS : Texture.WrapMode;

        private wrapT : Texture.WrapMode;

        private wrapR : Texture.WrapMode;

        /**
         * Creates a new three-dimensional texture for the purpose of offscreen
         * rendering.
         * 
         * @see com.jme3.texture.FrameBuffer
         * 
         * @param width
         * @param height
         * @param format
         * @param numSamples
         */
        public constructor(width? : any, height? : any, depth? : any, numSamples? : any, format? : any) {
            if(((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((typeof depth === 'number') || depth === null) && ((typeof numSamples === 'number') || numSamples === null) && ((typeof format === 'number') || format === null)) {
                let __args = Array.prototype.slice.call(arguments);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let img : any = new Image(format, width, height, depth, null, ColorSpace.Linear);
                    super();
                    this.wrapS = Texture.WrapMode.EdgeClamp;
                    this.wrapT = Texture.WrapMode.EdgeClamp;
                    this.wrapR = Texture.WrapMode.EdgeClamp;
                    (() => {
                        this.setImage(img);
                        if(com.jme3.texture.Image.Format["_$wrappers"][img.getFormat()].isDepthFormat()) {
                            this.setMagFilter(Texture.MagFilter.Nearest);
                            this.setMinFilter(Texture.MinFilter.NearestNoMipMaps);
                        }
                    })();
                }
                (() => {
                    this.getImage().setMultiSamples(numSamples);
                })();
            } else if(((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null) && ((typeof depth === 'number') || depth === null) && ((typeof numSamples === 'number') || numSamples === null) && format === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let format : any = __args[3];
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let img : any = new Image(format, width, height, depth, null, ColorSpace.Linear);
                    super();
                    this.wrapS = Texture.WrapMode.EdgeClamp;
                    this.wrapT = Texture.WrapMode.EdgeClamp;
                    this.wrapR = Texture.WrapMode.EdgeClamp;
                    (() => {
                        this.setImage(img);
                        if(com.jme3.texture.Image.Format["_$wrappers"][img.getFormat()].isDepthFormat()) {
                            this.setMagFilter(Texture.MagFilter.Nearest);
                            this.setMinFilter(Texture.MinFilter.NearestNoMipMaps);
                        }
                    })();
                }
            } else if(((width != null && width instanceof com.jme3.texture.Image) || width === null) && height === undefined && depth === undefined && numSamples === undefined && format === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let img : any = __args[0];
                super();
                this.wrapS = Texture.WrapMode.EdgeClamp;
                this.wrapT = Texture.WrapMode.EdgeClamp;
                this.wrapR = Texture.WrapMode.EdgeClamp;
                (() => {
                    this.setImage(img);
                    if(com.jme3.texture.Image.Format["_$wrappers"][img.getFormat()].isDepthFormat()) {
                        this.setMagFilter(Texture.MagFilter.Nearest);
                        this.setMinFilter(Texture.MinFilter.NearestNoMipMaps);
                    }
                })();
            } else if(width === undefined && height === undefined && depth === undefined && numSamples === undefined && format === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super();
                this.wrapS = Texture.WrapMode.EdgeClamp;
                this.wrapT = Texture.WrapMode.EdgeClamp;
                this.wrapR = Texture.WrapMode.EdgeClamp;
            } else throw new Error('invalid overload');
        }

        public createSimpleClone$() : Texture {
            let clone : Texture3D = new Texture3D();
            this.createSimpleClone(clone);
            return clone;
        }

        public createSimpleClone(rVal? : any) : any {
            if(((rVal != null && rVal instanceof com.jme3.texture.Texture) || rVal === null)) {
                let __args = Array.prototype.slice.call(arguments);
                return <any>(() => {
                    rVal.setWrap(Texture.WrapAxis.S, this.wrapS);
                    rVal.setWrap(Texture.WrapAxis.T, this.wrapT);
                    rVal.setWrap(Texture.WrapAxis.R, this.wrapR);
                    return super.createSimpleClone(rVal);
                })();
            } else if(rVal === undefined) {
                return <any>this.createSimpleClone$();
            } else throw new Error('invalid overload');
        }

        /**
         * <code>setWrap</code> sets the wrap mode of this texture for a
         * particular axis.
         * 
         * @param axis
         * the texture axis to define a wrapmode on.
         * @param mode
         * the wrap mode for the given axis of the texture.
         * @throws IllegalArgumentException
         * if axis or mode are null
         */
        public setWrap(axis? : any, mode? : any) : any {
            if(((typeof axis === 'number') || axis === null) && ((typeof mode === 'number') || mode === null)) {
                let __args = Array.prototype.slice.call(arguments);
                return <any>(() => {
                    if(mode == null) {
                        throw new java.lang.IllegalArgumentException("mode can not be null.");
                    } else if(axis == null) {
                        throw new java.lang.IllegalArgumentException("axis can not be null.");
                    }
                    switch((axis)) {
                    case com.jme3.texture.Texture.WrapAxis.S:
                        this.wrapS = mode;
                        break;
                    case com.jme3.texture.Texture.WrapAxis.T:
                        this.wrapT = mode;
                        break;
                    case com.jme3.texture.Texture.WrapAxis.R:
                        this.wrapR = mode;
                        break;
                    }
                })();
            } else if(((typeof axis === 'number') || axis === null) && mode === undefined) {
                return <any>this.setWrap$com_jme3_texture_Texture_WrapMode(axis);
            } else throw new Error('invalid overload');
        }

        /**
         * <code>setWrap</code> sets the wrap mode of this texture for all axis.
         * 
         * @param mode
         * the wrap mode for the given axis of the texture.
         * @throws IllegalArgumentException
         * if mode is null
         */
        public setWrap$com_jme3_texture_Texture_WrapMode(mode : Texture.WrapMode) {
            if(mode == null) {
                throw new java.lang.IllegalArgumentException("mode can not be null.");
            }
            this.wrapS = mode;
            this.wrapT = mode;
            this.wrapR = mode;
        }

        /**
         * <code>getWrap</code> returns the wrap mode for a given coordinate axis
         * on this texture.
         * 
         * @param axis
         * the axis to return for
         * @return the wrap mode of the texture.
         * @throws IllegalArgumentException
         * if axis is null
         */
        public getWrap(axis : Texture.WrapAxis) : Texture.WrapMode {
            switch((axis)) {
            case com.jme3.texture.Texture.WrapAxis.S:
                return this.wrapS;
            case com.jme3.texture.Texture.WrapAxis.T:
                return this.wrapT;
            case com.jme3.texture.Texture.WrapAxis.R:
                return this.wrapR;
            }
            throw new java.lang.IllegalArgumentException("invalid WrapAxis: " + axis);
        }

        public getType() : Texture.Type {
            return Texture.Type.ThreeDimensional;
        }

        public equals(other : any) : boolean {
            if(!(other != null && other instanceof com.jme3.texture.Texture3D)) {
                return false;
            }
            let that : Texture3D = <Texture3D>other;
            if(this.getWrap(Texture.WrapAxis.S) !== that.getWrap(Texture.WrapAxis.S)) {
                return false;
            }
            if(this.getWrap(Texture.WrapAxis.T) !== that.getWrap(Texture.WrapAxis.T)) {
                return false;
            }
            if(this.getWrap(Texture.WrapAxis.R) !== that.getWrap(Texture.WrapAxis.R)) {
                return false;
            }
            return super.equals(other);
        }

        public write(e : JmeExporter) {
            super.write(e);
            let capsule : OutputCapsule = e.getCapsule(this);
            capsule.write(this.wrapS, "wrapS", Texture.WrapMode.EdgeClamp);
            capsule.write(this.wrapT, "wrapT", Texture.WrapMode.EdgeClamp);
            capsule.write(this.wrapR, "wrapR", Texture.WrapMode.EdgeClamp);
        }

        public read(e : JmeImporter) {
            super.read(e);
            let capsule : InputCapsule = e.getCapsule(this);
            this.wrapS = capsule.readEnum<any>("wrapS", Texture.WrapMode, Texture.WrapMode.EdgeClamp);
            this.wrapT = capsule.readEnum<any>("wrapT", Texture.WrapMode, Texture.WrapMode.EdgeClamp);
            this.wrapR = capsule.readEnum<any>("wrapR", Texture.WrapMode, Texture.WrapMode.EdgeClamp);
        }
    }
    Texture3D["__class"] = "com.jme3.texture.Texture3D";
    Texture3D["__interfaces"] = ["java.lang.Cloneable","com.jme3.export.Savable","com.jme3.asset.CloneableSmartAsset"];


}

