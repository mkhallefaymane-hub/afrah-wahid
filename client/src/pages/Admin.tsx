import React, { useState } from "react";
import { useAdminLogin, useMessages } from "@/hooks/use-contact";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, Lock } from "lucide-react";
import { format } from "date-fns";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const loginMutation = useAdminLogin();
  const { data: messages, isLoading, isError } = useMessages();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(password, {
      onSuccess: () => {
        setIsAuthenticated(true);
      }
    });
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Card className="w-full max-w-md p-6">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
              <Lock size={32} />
            </div>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
              />
              <Button type="submit" className="w-full h-12" disabled={loginMutation.isPending}>
                {loginMutation.isPending ? <Loader2 className="animate-spin" /> : "Unlock"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Messages Inbox</h1>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)}>Logout</Button>
        </div>

        <Card>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-12 flex justify-center"><Loader2 className="animate-spin w-8 h-8 text-primary" /></div>
            ) : isError ? (
              <div className="p-12 text-center text-red-500">Error loading messages</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date Sent</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Occasion</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="w-[40%]">Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages?.map((msg: any) => (
                    <TableRow key={msg.id}>
                      <TableCell className="text-muted-foreground text-xs whitespace-nowrap">
                        {format(new Date(msg.createdAt), 'dd MMM yyyy HH:mm')}
                      </TableCell>
                      <TableCell className="font-medium">{msg.fullName}</TableCell>
                      <TableCell>{msg.phone}</TableCell>
                      <TableCell>{msg.city}</TableCell>
                      <TableCell className="capitalize">{msg.occasionType}</TableCell>
                      <TableCell>{msg.occasionDate || '-'}</TableCell>
                      <TableCell className="text-sm">{msg.message}</TableCell>
                    </TableRow>
                  ))}
                  {messages?.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-12 text-muted-foreground">
                        No messages yet
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
