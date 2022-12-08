string text = File.ReadAllText("input.txt");

var x = text.Split("\r\n");

var path = new Stack<string>();
var map = new Dictionary<string, int>();

for (int i = 0; i < x.Length; i++)
{
    var h = x[i].Split(' ');
    if (h[0] == "$")
    {

        if (h[1] == "cd")
        {
            if (h[2] == "..")
            {
                path.Pop();
            }
            else if (h[2] == "/")
            {
                path.Push(string.Join("",path) + h[2]);
            }
            else
            {
                path.Push(string.Join("", path) + h[2]);
            }
        }
    } else if (h[0] != "dir") {

        var size = int.Parse(h[0]);
        foreach (var item in path)
        {
            map[item] = map.GetValueOrDefault(item) + size;
        }
    }
}

var list = map.Values.ToList();
int score = 0;


foreach (var item in list)
{
    if(item <= 100000)
    {
        score += item;
    }
   
}


//Part 2
int remainingDiskSpace = 70000000 - list[0];
int DiskSpaceToRemove = 30000000 - remainingDiskSpace;
List<int> removes = new List<int>();
foreach (var item in list)
{
    if(item > DiskSpaceToRemove)
    {
        removes.Add(item);
    }
}
int dictToRemove = 0;
for (int i = 0; i < removes.Count - 1; i++)
{
    if (removes[i] < removes[i+1])
    {
        dictToRemove = removes[i];
    }
}
Console.WriteLine("(Part1): " + score); //part1 Result: 1306611
Console.WriteLine("(Part2): "+ dictToRemove); //part2 Result: 13210366

