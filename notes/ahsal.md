




# Used cura software to understand interfaces. 






| device   | UltraMaker 2+    |
|--------------- | --------------- |
| Gcode flavour   | RepRap/Marlin-derived G-code <not sure>   |
| _    |    |









## There could be a away to ssh to the printer , if its in the developer mode
found out it doesn't sent have a developer mode 


- [] Try Using python serial module to send Gcode 
- [] 



## What is Gcode <Geometric Code>

It is a programming language . WTH ?
It Mainly do 3 things.
Tells the motors where to move, how fast to move, and what path to follow

There are several types of Gcodes.In UltraMaker  2+ found something interesting in a forum
[Gcode reference](https://community.ultimaker.com/topic/39260-ultimaker-2-connect-support-gcode-commands/)  a good discussion , should read 



## previous project attempts from prof [source](https://github.com/jaloliddin99/Automated-Smartwatch-Activity-Recognition/blob/main/webapp/app.js#L263) 




## Ideas for translation from Acc to Gcode hopefully
- [] naive methods to try acc -> vel -> position , use feed rate as t








[Gcode reference source](https://community.ultimaker.com/topic/39260-ultimaker-2-connect-support-gcode-commands/)

```Gcode

//Implemented Codes
//-------------------
// G0  -> G1
// G1  - Coordinated Movement X Y Z E
// G2  - CW ARC
// G3  - CCW ARC
// G10 - Retract filament to given distance from nozzle tip (will affect the E-position) (G10 S-16.5 F300)
// G28 - Home all Axis
// G90 - Use Absolute Coordinates. Affects all axes, including the E-axis. See M82 for E-axis only.
// G91 - Use Relative Coordinates. Affects all axes, including the E-axis. See M83 for E-axis only.
// G92 - Set current position to coordinates given
// G280 Prime blob. S0 = blob, S1 = none, only moves filament to nozzle tip


//RepRap M Codes
// M104 - Set extruder target temp
// M105 - Read current temp and status info
// M106 - Fan on
// M107 - Fan off
// M109 - wait for extruder to reach target temp

//Custom M Codes
// M17  - Enable/Power all stepper motors
// M18  - Disable all stepper motors; same as M84
// M80  - Turn on Power Supply
// M81  - Turn off Power Supply
// M82  - Set E codes absolute (default)
// M83  - Set E codes relative while in Absolute Coordinates (G90) mode
// M84  - Disable steppers until next move
// M92  - Set axis_steps_per_unit - same syntax as G92
// M114 - Output current position to serial port
// M115 - Get Firmware Version and Capabilities
// M140 - Set bed target temp
// M142 - Set system lights (M142 w[0-255]) Note that the parameter letters are all lower case.
// M190 - Wait for bed to reach target temp
// M201 - Set max acceleration in units/s^2 for print moves (M201 X1000 Y1000)
// M202 - Set max acceleration in units/s^2 for travel moves (M202 X1000 Y1000) Unused in Marlin!!
// M203 - Set maximum feedrate that your machine can sustain (M203 X200 Y200 Z300 E10000) in mm/sec
// M204 - Set default acceleration: S normal moves T filament only moves (M204 S3000 T7000) im mm/sec^2.
// M205 - Advanced settings: minimum travel speed S=while printing, T=travel only, B=minimum segment time [us], X=maximum xy jerk, Z=maximum Z jerk, E=maximum E jerk
// M206 - Set additional homing offset
// M218 - Set hotend offset (in mm): T<extruder_number> X<offset_on_X> Y<offset_on_Y> Z<offset_on_Z>
// M220 S<factor in percent> - Set speed factor override percentage
// M221 S<factor in percent> - Set extrude factor override percentage
// M290 P<powerBudget> I<idle_power_consumption>
// M291 R<nominal_bed_resistance> A<bed_resistance_per_degree> V<bed_voltage>
// M292 T<hotend_nr> R<nominal_hotend_cartridge_resistance> V<hotend_slot_voltage> P<max_hotend_power>
// M299 - Set retracted filament length: T<hotend_nr> R<retracted length>
// M301 - Set nozzle PID parameters FF, P, I, D, i, C and R (Q: Debug dump enable/disable)
// M302 - Allow cold extrudes, or set the minimum extrude S<temperature>
// M304 - Set bed PID parameters FF, P, I, D, i, C and R (Q: Debug dump enable/disable)
// M400 - Finish all moves
// M401 - Quickstop - Abort all the planned moves. This will stop the head mid-move, so most likely the head will be out of sync with the stepper position after this
// M405 - Enable/disable the flow sensor hardware. S1=active A=averaging value
// M406 - Re-init flow sensor algorithm
// M407 - Read raw flow sensor value: S<sensor number>
// M907 - Set digital trimpot motor current using axis codes. Current in mA. X-axis sets Y-axis as well. (M907 X1300 Z1300 E1250)
// M998 - Intentionally stop the system as if by an error.
// M999 - Restart after being stopped by error
// M12000 - Set build volume maximum position (M12000 X200 Y200 Z200)
// M12001 - Set build volume minimum position (M12000 X0 Y0 Z0)
//          The minimum and maximum position combined define the build volume for the printer. They also define the default homing coordinates.
// M12003 - Get board type
// M12004 - Set the direction of each axis. M12004 X[0/1] Y[0/1] Z[0/1], To set direction per extruder: M12004 T[0/1] E[0/1]
// M12005 - Set the extruder temperature compensation
// M12006 - Set the build plate temperature compensation
// M12010 - Read/Write TMC2130 stepper driver registers. R[register index] (S[driver index]) (V[new register value]). A driver index of 0xFF will address all drivers.
// M12020 - Activate the high power 24V self test. This will check if the 24VHP can be turned off and on. Triggers an error if it can't.
// M12030 - Set the Top Cap fan speed: S<speed 0-255>, without S-parameter the fan will be in 'auto' mode.
// M12031 - Read the topcap present signal
// M12032 - Read the topcap temperature

```
