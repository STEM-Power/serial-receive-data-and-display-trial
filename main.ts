/**
 * Trial extension for microbit makecode .
 * From STEM Power Limited.
 * https://stem-power.com
 *  */

/**
 * Serial receive data and display
 */
//% weight=100 color=#0975ff icon="\uf043" block="HDC1080"
namespace UART {
    
    /**
     * UART RX
     */
    //% blockId="RXdata" block="UART RX Data"
    //% weight=90 blockGap=8
    export function RXdata(): string {

        let response: string = ""
        serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
            response += serial.readString()

            
        })
        serial.onDataReceived(serial.delimiters(Delimiters.NewLine), () => { })
        return response
           
    }



}