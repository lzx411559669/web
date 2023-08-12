import uuid
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(('127.0.0.1', 9001))
data = '红红火123'
print(data)
dateBytes = bytes(data,'utf-8')
dateLen = len(dateBytes)
data_len = dateLen.to_bytes(4,byteorder='big')
print(data_len+dateBytes)
# s.send(data_len+dateBytes)

for i in range(100):
    print(i)
    s.sendall(data_len+dateBytes)