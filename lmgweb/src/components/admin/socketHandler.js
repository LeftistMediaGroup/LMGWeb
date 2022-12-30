import React from "react";
import { useEffect, useState } from "react";

import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';

import io from 'socket.io-client';

const socket = io("https://admin.4a2ib8tj96gajw856jj7.xyz");

export default function SocketHandler(props) {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  useEffect((props) => {
    props.serverFoundHandler(isConnected);
  }, [isConnected]);

  return (
    <>
        <Paper>
            <Card>
                <p>Connected: { '' + isConnected }</p>
            </Card>
        </Paper>
    </>
  );
}
