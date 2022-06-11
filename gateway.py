import random
import time
from pydoc import cli
import serial.tools.list_ports
import sys
from Adafruit_IO import MQTTClient

ADAFRUIT_IO_FEED_ID = ['pump','humi','light']
ADAFRUIT_IO_USERNAME = "tienle"
ADAFRUIT_IO_KEY = "aio_ncEs02L8tGfE34TnWj0yRVnbiI37"

def connected(client):
    for i in ADAFRUIT_IO_FEED_ID:
        print("ket noi ok")
        client.subscribe(i)
def subscribe(client, userdata, mid, granted_qos):
    print(" Subcribe thanh cong ...")

def disconnected(client) :
    print(" Ngat ket noi ...")
    sys.exit(1)

def message ( client , feed_id , payload ):
    print (" Nhan du lieu : "+ feed_id +"   " + payload )
    ser.write((str(payload) + "#").encode())

def getPort () :
    ports = serial . tools . list_ports . comports ()
    N = len(ports)
    commPort = " None "
    for i in range (0 , N) :
        port = ports [ i ]
        strPort = str ( port )
        if "com0com - serial port emulator" in strPort :
            splitPort = strPort . split (" ")
            commPort = ( splitPort [0])
            return commPort

ser = serial.Serial( port = getPort () , baudrate =115200)

mess = ""
def processData ( data ) :
    data = data . replace ("!", "")
    data = data . replace ("#", "")
    splitData = data . split (":")
    print (splitData)
    if splitData[1] == "HUMI":
        client.publish("humi", int(splitData[2]))
    elif splitData[1] == "LIGHT":
        client.publish("light", int(splitData[2]))
    elif splitData[1] == "PUMP":
        client.publish("pump", int(splitData[2]))

mess = ""
def readSerial() :
    bytesToRead = ser.inWaiting()
    if ( bytesToRead > 0) :
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF -8")
        print(mess)
        while ("#" in mess ) and ("!" in mess ) :
            start = mess.find ("!")
            end = mess.find ("#")
            processData(mess[start:end + 1])
            if (end == len(mess)) :
                mess = ""
            else :
                mess = mess[end +1:]




client = MQTTClient(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()
while True:
    readSerial()
    time.sleep(1)