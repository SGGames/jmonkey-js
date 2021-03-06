/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.jme3.light {
    import Camera = com.jme3.renderer.Camera;

    import Geometry = com.jme3.scene.Geometry;

    /**
     * <code>LightFilter</code> is used to determine which lights should be
     * rendered for a particular {@link Geometry} + {@link Camera} combination.
     * 
     * @author Kirill Vainer
     */
    export interface LightFilter {
        /**
         * Sets the camera for which future filtering is to be done against in
         * {@link #filterLights(com.jme3.scene.Geometry, com.jme3.light.LightList)}.
         * 
         * @param camera The camera to perform light filtering against.
         */
        setCamera(camera : Camera);

        /**
         * Determine which lights on the {@link Geometry#getWorldLightList() world
         * light list} are to be rendered.
         * <p>
         * The simplest implementation (e.g. one that performs no filtering) would
         * simply copy the contents of {@link Geometry#getWorldLightList()} to
         * {@code filteredLightList}.
         * <p>
         * An advanced implementation would determine if the light intersects
         * the {@link Geometry#getWorldBound() geometry's bounding volume} and if
         * the light intersects the frustum of the camera set in
         * {@link #setCamera(com.jme3.renderer.Camera)} as well as sort the lights
         * according to some "influence" criteria - this will then provide
         * an optimal set of lights that should be used for rendering.
         * 
         * @param geometry The geometry for which the light filtering is performed.
         * @param filteredLightList The results are to be stored here.
         */
        filterLights(geometry : Geometry, filteredLightList : LightList);
    }
}

