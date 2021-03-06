// THIS FILE WAS AUTOGENERATED
/// <reference path="Domain.ts" />
module AI
{
"use strict";
    
    /**
     * Instances of Event represent structured event records that can be grouped and searched by their properties. Event data item also creates a metric of event count by name.
     */
    export class EventData extends Microsoft.Telemetry.Domain
    {
        
        /**
         * Schema version
         */
        public ver: number;
        
        /**
         * Event name. Keep it low cardinality to allow proper grouping and useful metrics.
         */
        public name: string;
        
        /**
         * Collection of custom properties.
         */
        public properties: any;
        
        /**
         * Collection of custom measurements.
         */
        public measurements: any;
        
        constructor()
        {
            super();
            
            this.ver = 2;
            this.properties = {};
            this.measurements = {};
        }
    }
}
