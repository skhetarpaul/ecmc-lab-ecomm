/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.*;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author hp
 */
@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
    
    protected void doGet(HttpServletRequest request, 
HttpServletResponse response)
        throws ServletException, IOException
    {
        try {
  
            // Initialize the database
           
            String n = (String) request.getParameter("username1");
            System.out.println(n + "is the name");
            
            
            
            
            
            
            
            if(n==null) {
                n = "Saransh";
            }
            
            request.setAttribute("username",n);
            RequestDispatcher  rd=request.getRequestDispatcher("Mainpage.jsp");
            rd.forward(request,response); 
        }
        catch (Exception  e) {
            PrintWriter out = response.getWriter();
            out.println("<html><body><b>UnnSuccessfully Inserted"
                        + "</b></body></html>");
        }
    }

}
