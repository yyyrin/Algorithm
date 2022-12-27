# [BOJ] 11650. 좌표 정렬하기

n = int(input())  # 점 n개

arr = []  # 좌표 저장할 list
for i in range(n):  # 빈 리스트에 좌표 입력값을 저장
    [a, b] = map(int, input().split())
    arr.append([a, b])
# arr = [[3, 4], [1, 1], [1, -1], [2, 2], [3, 3]]

s_array = sorted(arr)  # 오름차순으로 정렬
for i in range(n):    # 순서대로 출력
    print(s_array[i][0], s_array[i][1])