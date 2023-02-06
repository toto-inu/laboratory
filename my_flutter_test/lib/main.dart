import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<String> titleList = ["Amazon", "Rakuten", "Yahoo!"];
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
     _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
   return Scaffold(
      appBar: AppBar(
       backgroundColor: Theme.of(context).colorScheme.inversePrimary,
       title: const Text("Flutterラボ"),
      ),
      body: ListView.builder(
        itemCount: titleList.length,
        itemBuilder: (context, index) {
          return Column(
            children: [
              ListTile(
                leading: const Icon(Icons.key),
                title: Text(titleList[index])
              ),
              const Divider(height: 0)
            ]
          );
        }
      ) ,
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          titleList.add("Google");
          print("🐕${titleList}");
          setState(() {

          });
        },
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
